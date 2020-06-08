/* CONFIGURATION STARTS HERE */

/* Step 1: enter your domain name like fruitionsite.com */
const MY_DOMAIN = 'garyshen.me';

/*
 * Step 2: enter your URL slug to page ID mapping
 * The key on the left is the slug (without the slash)
 * The value on the right is the Notion page ID
 */
const SLUG_TO_PAGE = {
    '': '486a836e6add478f83d45ea92c7d1e2d',
    'bio': '905c15817f084cd0abd5d46670d6e946',
    'collections': 'b938fe571817484ea0c506c49875e8fb',
    'collections/podcasts': "724c3f079a984764827af3b4cf56d4a3",
    'collections/reading': "83b479d188174ef9959498621073a481",
    'collections/shows-movies': "356ff575c7d34555a25683b7224e6486",
    'excel-ribbon-keys': 'a00a21aa2a3c436ea188ac45ef2b0584',
    'excel-ribbon-keys/feedback': '1f7be4d9332d4cac84ed32883abbb2a1',
    'isolation-desktop': '85c66375a78344e0a2a77ac170428a55',
    "knowledge-base": "c9d38a3493a14bedae56b206a71ad9db",
};

/* Step 3: enter your page title and description for SEO purposes */
const PAGE_TITLE = 'Gary Shen';
const PAGE_DESCRIPTION = 'Public personal Notion page for Gary Shen.';

/* Step 4: enter a Google Font name, you can choose from https://fonts.google.com */
const GOOGLE_FONT = 'Amiri';

/* Step 5: enter any custom scripts you'd like */
const CUSTOM_SCRIPT = ``;

/* CONFIGURATION ENDS HERE */

const PAGE_TO_SLUG = {};
const slugs = [];
const pages = [];
Object.keys(SLUG_TO_PAGE).forEach(slug => {
    const page = SLUG_TO_PAGE[slug];
    slugs.push(slug);
    pages.push(page);
    PAGE_TO_SLUG[page] = slug;
});

addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
});

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

function handleOptions(request) {
    if (request.headers.get('Origin') !== null &&
        request.headers.get('Access-Control-Request-Method') !== null &&
        request.headers.get('Access-Control-Request-Headers') !== null) {
        // Handle CORS pre-flight request.
        return new Response(null, {
            headers: corsHeaders
        });
    } else {
        // Handle standard OPTIONS request.
        return new Response(null, {
            headers: {
                'Allow': 'GET, HEAD, POST, PUT, OPTIONS',
            }
        });
    }
}

async function fetchAndApply(request) {
    if (request.method === 'OPTIONS') {
        return handleOptions(request);
    }
    let url = new URL(request.url);
    const notionUrl = 'https://www.notion.so' + url.pathname;
    let response;

    const wixUrl = 'https://stepupvirtual.wixsite.com/' + url.pathname.slice(4);
    if (url.pathname.startsWith("/wix")) {
        response = await fetch(wixUrl, {
            body: request.body,
            headers: request.headers,
            method: request.method,
        });
        response = new Response(response.body, response);
        response.headers.delete('Content-Security-Policy');
        response.headers.delete('X-Content-Security-Policy');
        return wixAppendJavascript(response)
    }

    if (url.pathname.startsWith('/app') && url.pathname.endsWith('js')) {
        response = await fetch(notionUrl);
        let body = await response.text();
        response = new Response(body.replace(/www.notion.so/g, MY_DOMAIN).replace(/notion.so/g, MY_DOMAIN), response);
        response.headers.set('Content-Type', 'application/x-javascript');
    } else if ((url.pathname.startsWith('/api'))) {
        // Forward API
        response = await fetch(notionUrl, {
            body: request.body,
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
            },
            method: 'POST',
        });
        response = new Response(response.body, response);
        response.headers.set('Access-Control-Allow-Origin', '*');
    } else if (slugs.indexOf(url.pathname.slice(1)) > -1) {
        const pageId = SLUG_TO_PAGE[url.pathname.slice(1)];
        return Response.redirect('https://' + MY_DOMAIN + '/' + pageId, 301);
    } else {
        response = await fetch(notionUrl, {
            body: request.body,
            headers: request.headers,
            method: request.method,
        });
        response = new Response(response.body, response);
        response.headers.delete('Content-Security-Policy');
        response.headers.delete('X-Content-Security-Policy');
    }

    return appendJavascript(response, SLUG_TO_PAGE);
}

class MetaRewriter {
    element(element) {
        if (PAGE_TITLE !== '') {
            if (element.getAttribute('property') === 'og:title'
                || element.getAttribute('name') === 'twitter:title') {
                element.setAttribute('content', PAGE_TITLE);
            }
            if (element.tagName === 'title') {
                element.setInnerContent(PAGE_TITLE);
            }
        }
        if (PAGE_DESCRIPTION !== '') {
            if (element.getAttribute('name') === 'description'
                || element.getAttribute('property') === 'og:description'
                || element.getAttribute('name') === 'twitter:description') {
                element.setAttribute('content', PAGE_DESCRIPTION);
            }
        }
        if (element.getAttribute('property') === 'og:url'
            || element.getAttribute('name') === 'twitter:url') {
            element.setAttribute('content', MY_DOMAIN);
        }
        if (element.getAttribute('name') === 'apple-itunes-app') {
            element.remove();
        }
    }
}

class HeadRewriter {
    element(element) {
        // element.append(`<!-- Global site tag (gtag.js) - Google Analytics -->
        // <script async src="https://www.googletagmanager.com/gtag/js?id=UA-105011628-2"></script>
        // <script>
        // window.dataLayer = window.dataLayer || [];
        // function gtag(){dataLayer.push(arguments);}
        // gtag('js', new Date());
        // gtag('config', 'UA-105011628-2');
        // </script>`, {
        //   html: true
        // })
        //manual requests to google analytics
        element.append(`<script>
        function logToGA(){
            const pathname = window.location.pathname
            if (!pathname.startsWith('/app') && !pathname.endsWith('js') && !pathname.endsWith('css') && !pathname.startsWith('/api')) {
                var post_pathname = pathname.slice(1) == "" ? "home": pathname.slice(1)
                if(pages.indexOf(pathname.slice(1)) > -1) {
                    post_pathname = PAGE_TO_SLUG[pathname.slice(1)]=="" ? "home" : PAGE_TO_SLUG[pathname.slice(1)];
                }
                fetch('https://maker.ifttt.com/trigger/page_visit/with/key/p6v_orT4YDYs8cTPH8saj?value1='+post_pathname, {
                    mode: "no-cors",
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                })
            }
        }
        window.onload = (event) => {
            logToGA()
        };
        const pushStateFn = history.pushState;
        history.pushState = function () {
            pushStateFn.apply(history, arguments);
            logToGA()
        };
      </script>
      `, {
            html: true
        })
        if (GOOGLE_FONT !== '') {
            element.append(`<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT}:Regular,Bold,Italic&display=swap" rel="stylesheet">
        <style>* { font-family: ${GOOGLE_FONT} !important; }</style>`, {
                html: true
            });
        }
        element.append(`<style>
      div.notion-topbar > div > div:nth-child(3) { display: none !important; }
      div.notion-topbar > div > div:nth-child(4) { display: none !important; }
      div.notion-topbar > div > div:nth-child(5) { display: none !important; }
      div.notion-topbar > div > div:nth-child(6) { display: none !important; }
      div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }
      div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }
      </style>`, {
            html: true
        })
    }
}

class BodyRewriter {
    constructor(SLUG_TO_PAGE) {
        this.SLUG_TO_PAGE = SLUG_TO_PAGE;
    }
    element(element) {
        element.append(`<div style="display:none">Powered by <a href="http://fruitionsite.com">Fruition</a></div>
      <script>
      const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};
      const PAGE_TO_SLUG = {};
      const slugs = [];
      const pages = [];
      let redirected = false;
      Object.keys(SLUG_TO_PAGE).forEach(slug => {
        const page = SLUG_TO_PAGE[slug];
        slugs.push(slug);
        pages.push(page);
        PAGE_TO_SLUG[page] = slug;
      });
      function getPage() {
        return location.pathname.slice(-32);
      }
      function getSlug() {
        return location.pathname.slice(1);
      }
      function updateSlug() {
        const slug = PAGE_TO_SLUG[getPage()];
        if (slug != null) {
          history.replaceState(history.state, '', '/' + slug);
        }
      }
      const observer = new MutationObserver(function() {
        if (redirected) return;
        const nav = document.querySelector('.notion-topbar');
        const mobileNav = document.querySelector('.notion-topbar-mobile');
        if (nav && nav.firstChild && nav.firstChild.firstChild
          || mobileNav && mobileNav.firstChild) {
          redirected = true;
          updateSlug();
          const onpopstate = window.onpopstate;
          window.onpopstate = function() {
            if (slugs.includes(getSlug())) {
              const page = SLUG_TO_PAGE[getSlug()];
              if (page) {
                history.replaceState(history.state, 'bypass', '/' + page);
              }
            }
            onpopstate.apply(this, [].slice.call(arguments));
            updateSlug();
          };
        }
      });
      observer.observe(document.querySelector('#notion-app'), {
        childList: true,
        subtree: true,
      });
      const replaceState = window.history.replaceState;
      window.history.replaceState = function(state) {
        if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;
        return replaceState.apply(window.history, arguments);
      };
      const pushState = window.history.pushState;
      window.history.pushState = function(state) {
        const dest = new URL(location.protocol + location.host + arguments[2]);
        const id = dest.pathname.slice(-32);
        if (pages.includes(id)) {
          arguments[2] = '/' + PAGE_TO_SLUG[id];
        }
        return pushState.apply(window.history, arguments);
      };
      const open = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function() {
        arguments[1] = arguments[1].replace('${MY_DOMAIN}', 'www.notion.so');
        return open.apply(this, [].slice.call(arguments));
      };
    </script>${CUSTOM_SCRIPT}`, {
            html: true
        });
    }
}

async function appendJavascript(res, SLUG_TO_PAGE) {
    return new HTMLRewriter()
        .on('title', new MetaRewriter())
        .on('meta', new MetaRewriter())
        .on('head', new HeadRewriter())
        .on('body', new BodyRewriter(SLUG_TO_PAGE))
        .transform(res);
}

/* Step 3: enter your page title and description for SEO purposes */
const WIX_PAGE_TITLE = 'Step Up Virtual';
const WIX_PAGE_DESCRIPTION = 'Virtual summer camp';

class WixMetaRewriter {
    element(element) {
        if (WIX_PAGE_TITLE !== '') {
            if (element.getAttribute('property') === 'og:title'
                || element.getAttribute('name') === 'twitter:title') {
                element.setAttribute('content', WIX_PAGE_TITLE);
            }
            if (element.tagName === 'title') {
                element.setInnerContent(WIX_PAGE_TITLE);
            }
        }
        if (WIX_PAGE_DESCRIPTION !== '') {
            if (element.getAttribute('name') === 'description'
                || element.getAttribute('property') === 'og:description'
                || element.getAttribute('name') === 'twitter:description') {
                element.setAttribute('content', WIX_PAGE_DESCRIPTION);
            }
        }
        if (element.getAttribute('property') === 'og:url'
            || element.getAttribute('name') === 'twitter:url') {
            element.setAttribute('content', MY_DOMAIN);
        }
        if (element.getAttribute('name') === 'apple-itunes-app') {
            element.remove();
        }
    }
}

class WixHeadRewriter {
    element(element) {
        element.append(`
        <script>
        var links = document.getElementsByTagName("link");
        for (var i = 0; i < links.length; i++) {
            console.log(links[i].href)
            if (links[i].href.includes("/_partials")) {
                links[i].href = links[i].href.replace("https://${MY_DOMAIN}","https://stepupvirtual.wixsite.com")
            } 
            console.log(links[i].href)
        }
        </script>
        `, {
            html: true
        });
    }
}

class WixBodyRewriter {
    element(element) {
        element.append(`
      <script>
      const pushState = window.history.pushState;
      window.history.pushState = function(state) {
        const dest = new URL(location.protocol + location.host + arguments[2]);
        arguments[2] = '/' + dest.pathname;
        return pushState.apply(window.history, arguments);
      };
      const open = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function() {
        return open.apply(this, [].slice.call(arguments));
      };
      window.onload = function() {
        var anchors = document.getElementsByTagName("a");
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].href = anchors[i].href.replace("https://stepupvirtual.wixsite.com/",'https://${MY_DOMAIN}/wix/')
        }
      }</script>
        `, {
            html: true
        });
    }
}

async function wixAppendJavascript(res) {
    return new HTMLRewriter()
        .on('title', new WixMetaRewriter())
        .on('meta', new WixMetaRewriter())
        .on('head', new WixHeadRewriter())
        .on('body', new WixBodyRewriter())
        .transform(res);
}

