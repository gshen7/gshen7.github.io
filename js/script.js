//constants for content
const CONTENT_KEYS = ["about", "projects"];
const ABOUT = {
  overview:
    '<p align="justify">I\'m a <b>software engineering and business administration</b> student at the Ivey School of Business at the University of Western Ontario.<b> Interests</b> include travelling, hiking, camping, weightlifting, playing and watching sports (particularly hockey), and playing board/card games.</p>',
  media:
    '<p align="center">Here\'s some <b>content</b> I\'ve aggregated that I particularly enjoy:</p>' +
    '<table border="0"><tr><td><a target="_blank" href="https://www.youtube.com/playlist?list=PLW9B6SPNng3uIoAOT1Th9eOgP7W3Z4TcO">live on <i class="fab fa-youtube"></i></a> (nature vids)<hr/></td></tr>' +
    '<tr><td><a target="_blank" href="https://open.spotify.com/user/gshen098/playlist/2RpeW41ejgMk2dhdAskqRH?si=YCu7z398SsGRzcH3ichV-Q">\\ on <i class="fab fa-spotify"></i></a> (slower tunes)<hr/></td></tr>' +
    '<tr><td><a target="_blank" href="https://open.spotify.com/user/gshen098/playlist/7bIWJkcZl39U1EBEMxs1rb?si=epd4Q7fyROyX7B4Jo9dPHw">/ on <i class="fab fa-spotify"></i></a> (faster tunes)</td></tr></table>',
  slides: [
    {
      src: "resources/slides/matterhorn.JPG",
      image: true,
      caption: "The Matterhorn aka the Toblerone logo in the Swiss Alps, 2018"
    },
    {
      src: "resources/slides/eiger.png",
      image: true,
      caption:
        "A waterfall down the north face of the Eiger in the Swiss Alps, 2018"
    },
    {
      src: "resources/slides/lavaredo.png",
      image: true,
      caption:
        "Posing in front of the Tre Cime di Lavaredo in the Italian Alps, 2018"
    },
    {
      src: "resources/slides/venice.JPG",
      image: true,
      caption: "A bridge over the main canal in Venice, 2018"
    },
    {
      src: "resources/slides/castle.png",
      image: true,
      caption:
        "Getting squished on a very crowded bridge overlooking a castle that looks like it came straight from Disney in Germany, 2018"
    },
    {
      src: "resources/slides/sloth.JPG",
      image: true,
      caption:
        "Some fun in the sun during a camping trip at the Pinery Provincial Park, 2018"
    },
    {
      src: "resources/slides/oregoncoast.jpg",
      image: true,
      caption: "Long weekend trip to the Oregon coast, 2018"
    },
    {
      src: "resources/slides/stormking.JPG",
      image: true,
      caption:
        "At the summit of Mt. Storm King, overlooking Lake Crescent in the Olympic National Park, 2018"
    },
    {
      src: "resources/slides/mailbox.png",
      image: true,
      caption: "At the summit of Mailbox Peak, 2018"
    },
    {
      src: "resources/slides/hawaii.jpeg",
      image: true,
      caption: "On the rim of the Diamond Head Crater in Hawaii, 2018"
    },
    {
      src: "resources/slides/newZealand.jpeg",
      image: true,
      caption: "Walking the shores of New Zealand, 2017"
    },
    {
      src: "resources/slides/scandinavia.jpeg",
      image: true,
      caption: "The rocky edge of Scandinavia, 2016"
    },
    {
      src: "resources/slides/sectionHockey.jpeg",
      image: true,
      caption:
        "Played in an Ivey charity hockey game, 2017"
    },
    {
      src: "resources/slides/camping.jpeg",
      image: true,
      caption: "Camping at the Pinery Provincial Park, 2016"
    }
  ]
};
const TAGS = {
  Java: 3,
  R: 3,
  Python: 1,
  Assembly: 1,
  SQL: 2,
  NodeJS: 3,
  JS: 1,
  Meteor: 1,
  Express: 1,
  MongoDB: 2,
  "React Native": 1,
  Android: 1,
  Tableau: 1,
  Tensorflow: 1,
  Weka: 1,
  "Machine Learning": 2,
  "Web Scraping": 2
};
const PROJECTS = [
  {
    id: 7,
    title: "ESPN Fantasy Hockey API",
    tags: ["R", "JS", "Web Scraping",],
    description:
      "Scraped data from ESPN fantasy hockey and created a RESTful API using the plumber package in R. Allows for access to day by day stats, team rosters, league rules, and transactions. Additionally, created JS console script to automatically set lineup for the next 5 days."
  },
  {
    id: 6,
    title: "LineApp",
    tags: ["React Native", "NodeJS", "MongoDB", "Express"],
    description:
      "A proof of concept mobile application for crowd sourcing the lengths of lines. Users check in to a line to receive a promotional offer that is scanned upon checkout, which automatically checks them out of the line."
  },
  {
    id: 5,
    title: "NHL Prediction Models",
    tags: ["R", "Machine Learning", "Tensorflow", "Web Scraping", "Tableau"],
    description: "Created models for predicting various aspects of NHL hockey."
  },
  {
    id: 4,
    title: "Group Tools Chatbot",
    tags: ["NodeJS"],
    description:
      "A Facebook messenger chatbot to add several tools for group chats. Tools included: <ul>" +
      "<li>A gold star tracker for more tangibly giving and receiving kudos in the chat.</li>" +
      "<li>A list randomizer/selector for choosing people in the group.</li>" +
      "<li>A reaction picture library for quick access to various group specific pictures to send.</li>" +
      "</ul>"
  },
  {
    id: 3,
    title: "Bike Alarm",
    tags: ["Assembly"],
    description:
      "An HC12 microcontroller attachment to a stationary exercise bicycle that plays an alarm sound until a certain distance measured by wheel rotations is travelled."
  },
  {
    id: 2,
    title: "Support and Resistance Line Generator",
    tags: ["R"],
    description:
      "An algorithm to determine and plot support and resistance lines onto stock charts."
  },
  {
    id: 1,
    title: "Smart Bed Monitoring System",
    tags: ["Java", "SQL", "Weka", "Machine Learning"],
    description:
      "A machine learning based system for detecting bed-related scenarios and monitoring sleep patterns and sending alerts for certain situations. Used simple, non-intrusive piezoelectric force sensors transmitting readings via ZigBee nodes in real time. Stored historical data for sleep health history."
  },
  {
    id: 0,
    title: "RFID Object Locator",
    tags: ["Java", "SQL"],
    description:
      "A system for locating items with RFID tags attached to them using an RFID scanner."
  }
];

//configuration for particles background
const PARTICLES_CONFIG = {
  particles: {
    number: {
      value: 25,
      density: {
        enable: false
      }
    },
    color: {
      value: "#9da8bd"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#9da8bd",
      opacity: 0.75,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 10,
        duration: 0.25,
        opacity: 1,
        speed: 500
      },
      repulse: {
        distance: 200,
        duration: 1
      },
      push: {
        particles_nb: 5
      },
      remove: {
        particles_nb: 5
      }
    }
  },
  retina_detect: true
};

//constants for responsiveness
const WIDTH_THRESHOLD = 1125;
const HEIGHT_THRESHOLD = 475;

//global variables for tracking state
var global_toggled = false;
var currentActive = "home";
var selectedTags = Object.keys(TAGS);
var searchKey = "";
var size = "sm";
var mode = "";

$(document).ready(function () {
  //allows for clicking of items to check and uncheck project tags
  $("#projects-tag-filter, #sm-projects-tag-filter").on("click", function (
    event
  ) {
    var tag;
    if (
      event.target.className === "badge" ||
      event.target.className.includes("fa-")
    ) {
      tag = event.target.parentElement;
    } else {
      tag = event.target;
    }
    if (tag.innerText === "Select All") {
      changeAllCheck(true);
    } else if (tag.innerText === "Select None") {
      changeAllCheck(false);
    } else if (tag.localName === "input") {
      changeSelectedTags();
    } else if (tag.className !== "divider") {
      tag = tag.innerText.trim();
      tag = tag.substring(0, tag.indexOf(" "));
      changeCheck(tag);
    }
    event.stopPropagation();
  });
  //responsive resizing
  $(window).on("resize", function () {
    var win = $(this);
    var width = $(window).width();
    var height = $(window).height();
    if (width < WIDTH_THRESHOLD || height < HEIGHT_THRESHOLD) {
      resizeSmall();
    } else {
      resizeBig();
    }
  });
});

//initializes all the content
$(window).on("load", function () {
  init();
  toggler = document.getElementById("toggler");
  toggler.checked = mode == "";
  var width = $(window).width();
  var height = $(window).height();
  if (width < WIDTH_THRESHOLD || height < HEIGHT_THRESHOLD) {
    initSmall();
  } else {
    initBig();
  }
});

//fill about content
function changeAbout(about) {
  var leftContent = ABOUT.overview + "</div>";

  var leftContainer = document.getElementById("about-left");
  leftContainer.innerHTML = leftContent;

  var rightContent = ABOUT.media + "</div>";

  var rightContainer = document.getElementById("about-right");
  rightContainer.innerHTML = rightContent;

  var smallContent =
    ABOUT.overview + "<br/>" + ABOUT.media;

  var smallContainer = document.getElementById("sm-about-container");
  smallContainer.innerHTML = smallContent;

  var slidesContent = "";
  for (var i = 0; i < ABOUT.slides.length; i++) {
    slidesContent += '<div class="item' + (i == 0 ? ' active"' : '"') + ">";
    if (ABOUT.slides[i].image) {
      slidesContent += '<img src="' + ABOUT.slides[i].src + '">';
    } else {
      slidesContent +=
        '<video controls><source src="' + ABOUT.slides[i].src + '"></video>';
    }
    slidesContent +=
      '<div class="carousel-caption">' +
      ABOUT.slides[i].caption +
      "</div></div>";
  }

  var slidesContainer = document.getElementById("slidesWrapper");
  slidesContainer.innerHTML = slidesContent;

  var smalSlidesContent = "";
  for (var i = 0; i < ABOUT.slides.length; i++) {
    smalSlidesContent += '<div class="item' + (i == 0 ? ' active"' : '"') + ">";
    if (ABOUT.slides[i].image) {
      smalSlidesContent += '<img src="' + ABOUT.slides[i].src + '">';
    } else {
      smalSlidesContent +=
        '<video controls><source src="' + ABOUT.slides[i].src + '"></video>';
    }
    smalSlidesContent += "</div>";
  }

  var smallSlidesContainer = document.getElementById("sm-slidesWrapper");
  smallSlidesContainer.innerHTML = smalSlidesContent;
}

//handle select all or select none click
function changeAllCheck(checked) {
  for (var i = 0; i < Object.keys(TAGS).length; i++) {
    var tagCheck = document.getElementById(Object.keys(TAGS)[i] + "-check");
    tagCheck.checked = !tagCheck.checked;
    var smallTagCheck = document.getElementById(
      "sm-" + Object.keys(TAGS)[i] + "-check"
    );
    smallTagCheck.checked = !smallTagCheck.checked;
  }

  changeSelectedTags();
}

//handle click on tag
function changeCheck(tag) {
  var tagCheck = document.getElementById(tag + "-check");
  tagCheck.checked = !tagCheck.checked;
  var smallTagCheck = document.getElementById("sm-" + tag + "-check");
  smallTagCheck.checked = !smallTagCheck.checked;
  changeSelectedTags();
}

//change content of main panel
function changeContent(newActive) {
  if (currentActive !== "home" && size === "lg") {
    var panel = document.getElementById("content-panel-" + currentActive);
    var panelWidth = panel.offsetWidth;

    var newContentPanel = document.getElementById("content-panel-" + newActive);
    newContentPanel.style.width = panelWidth;
  }

  var oldContentDiv = document.getElementById("content-div-" + currentActive);
  var newContentDiv = document.getElementById("content-div-" + newActive);
  if (oldContentDiv && !oldContentDiv.className.includes("hidden")) {
    oldContentDiv.className = oldContentDiv.className + " hidden";
  }
  if (newContentDiv.className.includes("hidden")) {
    newContentDiv.className = newContentDiv.className.replace("hidden", "");
    var leftSidebar = document.getElementById("left-sidebar");
    leftSidebar.className = leftSidebar.className.replace(
      "col-md-offset-3",
      ""
    );
    var rightSidebar = document.getElementById("right-sidebar");
    rightSidebar.className = rightSidebar.className.replace(
      "col-md-offset-6",
      "col-md-offset-9"
    );
  }

  oldContentDiv = document.getElementById("sm-content-div-" + currentActive);
  newContentDiv = document.getElementById("sm-content-div-" + newActive);
  if (oldContentDiv && !oldContentDiv.className.includes("hidden")) {
    oldContentDiv.className = oldContentDiv.className + " hidden";
  }
  if (newContentDiv.className.includes("hidden")) {
    newContentDiv.className = newContentDiv.className.replace("hidden", "");
  }

  currentActive = newActive;
}

//handle mouseover of projects
function changePanels(filteredProjects) {
  var panels = filteredProjects.map(function (p) {
    var out =
      '<div class="panel panel-default" id="project-' +
      p.id +
      '-panel"><div class="panel-heading" onmouseover="expandProject(' +
      p.id +
      ')">' +
      p.title +
      '</div><div class="panel-body">';
    for (var i = 0; i < p.tags.length; i++) {
      out += '  <span class="label label-primary">' + p.tags[i] + "</span>";
    }
    out +=
      '<div class="collapse" id="project-' +
      p.id +
      '-collapse"><br/>' +
      p.description +
      "</div></div></div>";
    return out;
  });

  var projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = panels.join(" ");

  panels = filteredProjects.map(function (p) {
    var out =
      '<div class="panel panel-default" id="sm-project-' +
      p.id +
      '-panel"><div class="panel-heading" onmouseover="expandProject(' +
      p.id +
      ')">' +
      p.title +
      '</div><div class="panel-body">';
    for (var i = 0; i < p.tags.length; i++) {
      out += '  <span class="label label-primary">' + p.tags[i] + "</span>";
    }
    out +=
      '<div class="collapse" id="sm-project-' +
      p.id +
      '-collapse"><br/>' +
      p.description +
      "</div></div></div>";
    return out;
  });

  var smallProjectsContainer = document.getElementById("sm-projects-container");
  smallProjectsContainer.innerHTML = panels.join(" ");
}

//change what tags are selected
function changeSelectedTags() {
  selectedTags = [];
  for (var i = 0; i < Object.keys(TAGS).length; i++) {
    var tagCheck = document.getElementById(
      (size == "sm" ? "sm-" : "") + Object.keys(TAGS)[i] + "-check"
    );
    if (tagCheck.checked) {
      selectedTags.push(Object.keys(TAGS)[i]);
    }
  }

  updateTagsFilter();
  filterProjects();
}

//show project details
function expandProject(id) {
  for (var i = 0; i < PROJECTS.length; i++) {
    if (id !== PROJECTS[i].id) {
      var panel = document.getElementById(
        "project-" + PROJECTS[i].id + "-panel"
      );
      if (panel) {
        panel.className = panel.className.replace("info", "default");
      }
      var content = document.getElementById(
        "project-" + PROJECTS[i].id + "-collapse"
      );
      if (content) {
        content.className = content.className.replace("in", "");
      }
      var smallPanel = document.getElementById(
        "sm-project-" + PROJECTS[i].id + "-panel"
      );
      if (smallPanel) {
        smallPanel.className = smallPanel.className.replace("info", "default");
      }
      var smallContent = document.getElementById(
        "sm-project-" + PROJECTS[i].id + "-collapse"
      );
      if (smallContent) {
        smallContent.className = smallContent.className.replace("in", "");
      }
    } else {
      var panel = document.getElementById(
        "project-" + PROJECTS[i].id + "-panel"
      );
      if (panel) {
        panel.className = panel.className.replace("default", "info");
      }
      var content = document.getElementById(
        "project-" + PROJECTS[i].id + "-collapse"
      );
      if (content) {
        content.className = content.className.includes("in")
          ? content.className
          : content.className + " in";
      }
      var smallPanel = document.getElementById(
        "sm-project-" + PROJECTS[i].id + "-panel"
      );
      if (smallPanel) {
        smallPanel.className = smallPanel.className.replace("default", "info");
      }
      var smallContent = document.getElementById(
        "sm-project-" + PROJECTS[i].id + "-collapse"
      );
      if (smallContent) {
        smallContent.className = smallContent.className.includes("in")
          ? smallContent.className
          : smallContent.className + " in";
      }
    }
  }
}

//change which projects are displayed
function filterProjects(small) {
  var searchInput = document.getElementById(
    small ? "sm-proj-search" : "proj-search"
  );
  searchKey = searchInput.value;
  var otherInput = document.getElementById(
    !small ? "sm-proj-search" : "proj-search"
  );
  otherInput.value = searchKey;
  var filteredProjects = PROJECTS.filter(function (p) {
    return (
      p.title.toUpperCase().includes(searchKey.toUpperCase()) ||
      p.description.toUpperCase().includes(searchKey.toUpperCase())
    );
  });
  filteredProjects = filteredProjects.filter(function (p) {
    for (var i = 0; i < selectedTags.length; i++) {
      if (p.tags.includes(selectedTags[i])) {
        return true;
      }
    }
    return false;
  });

  changePanels(filteredProjects);
}

//hide middle panel
function hideContent() {
  var oldContentDiv = document.getElementById("content-div-" + currentActive);
  if (oldContentDiv && !oldContentDiv.className.includes("hidden")) {
    oldContentDiv.className = oldContentDiv.className + " hidden";
  }
  var oldContentDivSmall = document.getElementById(
    "sm-content-div-" + currentActive
  );
  if (oldContentDivSmall && !oldContentDivSmall.className.includes("hidden")) {
    oldContentDivSmall.className = oldContentDivSmall.className + " hidden";
  }

  var leftSidebar = document.getElementById("left-sidebar");
  leftSidebar.classList.add("col-md-offset-3");

  var rightSidebar = document.getElementById("right-sidebar");
  rightSidebar.className = rightSidebar.className.replace(
    "col-md-offset-9",
    "col-md-offset-6"
  );

  currentActive = "home";
}

//initial loading of content
function init() {
  changeAbout(ABOUT);
  changePanels(PROJECTS);
  //changeWells(EXPERIENCE);
  //changeHockey(HOCKEY);
  updateTagsFilter(true);
  filterProjects();
  var anchor = window.location.hash.substr(1);
  mode = anchor.includes("&off") ? "&off" : "";
  if (mode !== "&off") {
    if (!global_toggled) {
      particlesJS("particles-js", PARTICLES_CONFIG);
      global_toggled = true;
    }
    toggleParticles();
  }
  if (anchor.includes("&")) {
    anchor = anchor.substr(0, anchor.indexOf("&"));
  } else {
    anchor = anchor.substr(0);
  }
  if (CONTENT_KEYS.includes(anchor)) {
    navTo(anchor);
  } else {
    history.pushState(null, null, "#" + currentActive + mode);
  }
}

//initialize big display
function initBig() {
  var containerSm = document.getElementById("container-sm");
  containerSm.className = "collapse";
  var containerLg = document.getElementById("container-lg");
  containerLg.className = "";
  var containerToggle = document.getElementById("container-toggle");
  containerToggle.className = "row left-pad on-top-fixed";
  size = "lg";
}

//initialize small display
function initSmall() {
  var containerLg = document.getElementById("container-lg");
  containerLg.className = "collapse";
  var containerSm = document.getElementById("container-sm");
  containerSm.className = "";
  var containerToggle = document.getElementById("container-toggle");
  containerToggle.className = "row left-pad on-top";
  size = "sm";
}

//handle navigation
function navTo(newActive) {
  var oldPill = document.getElementById(currentActive + "-pill");
  if (oldPill) {
    oldPill.className = "";
  }
  var oldSmallPill = document.getElementById("sm-" + currentActive + "-pill");
  if (oldSmallPill) {
    oldSmallPill.className = "";
  }

  if (newActive === currentActive) {
    hideContent();
    history.pushState(null, null, "#" + currentActive + mode);
  } else {
    var newPill = document.getElementById(newActive + "-pill");
    newPill.className = "active";
    var newSmallPill = document.getElementById("sm-" + newActive + "-pill");
    newSmallPill.className = "active";

    changeContent(newActive);
    history.pushState(null, null, "#" + newActive + mode);
  }
}

//handle resizing
function resizeBig() {
  if (size != "lg") {
    initBig();
  }
}

//handle resizing
function resizeSmall() {
  if (size != "sm") {
    initSmall();
  }
}

//handle mouseover of particles toggle
function revealToggle(show) {
  var toggler = document.getElementById("toggler");
  if (show) {
    toggler.className = "";
  } else {
    toggler.className = "hidden";
  }
}

//show and hide particles
function toggleParticles() {
  toggler = document.getElementById("toggler");
  mode = toggler.checked ? "" : "&off";
  if (mode == "&off") {
    if (pJSDom) {
      cancelRequestAnimFrame(pJSDom[0].pJS.fn.checkAnimFrame);
      cancelRequestAnimFrame(pJSDom[0].pJS.fn.drawAnimFrame);
      pJSDom[0].pJS.fn.particlesEmpty();
      pJSDom[0].pJS.fn.canvasClear();
    }
  } else {
    if (!global_toggled) {
      particlesJS("particles-js", PARTICLES_CONFIG);
      global_toggled = true;
    }
    pJSDom[0].pJS.fn.vendors.start();
  }
  history.pushState(null, null, "#" + currentActive + mode);
}

//update appearance of tags checklist
function updateTagsFilter(first) {
  var tagOptions = Object.keys(TAGS).map(function (t) {
    var out =
      '<li class="keep-open"><a><input type="checkbox" id="' + t + '-check" ';
    if (selectedTags.includes(t) && !first) {
      out += "checked";
    }
    out += "/> " + t + ' <span class="badge"> ' + TAGS[t] + "</span></a></li>";
    return out;
  });

  var projectsTagFilter = document.getElementById("projects-tag-filter");
  projectsTagFilter.innerHTML =
    '<li class="keep-open"><a>Select All</a></li><li class="keep-open"><a>Select None</a></li><li class="divider"/>' +
    tagOptions.join(" ");

  var tagOptions = Object.keys(TAGS).map(function (t) {
    var out =
      '<li class="keep-open"><a><input type="checkbox" id="sm-' +
      t +
      '-check" ';
    if (selectedTags.includes(t) && !first) {
      out += "checked";
    }
    out += "/>" + t + ' <span class="badge"> ' + TAGS[t] + "</span></a></li>";
    return out;
  });

  var projectsTagFilter = document.getElementById("sm-projects-tag-filter");
  projectsTagFilter.innerHTML =
    '<li class="keep-open"><a>Select All</a></li><li class="keep-open"><a>Select None</a></li><li class="divider"/>' +
    tagOptions.join(" ");
}

//pause all playing videos
function pauseAll() {
  videos = document.getElementsByTagName("video");
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause();
  }
}
