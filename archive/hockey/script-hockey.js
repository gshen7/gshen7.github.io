//constants for content
const CONTENT_KEYS = ["about", "projects", "experience", "hockey"];

//configuration for particles background
const PARTICLES_CONFIG = {
  particles: {
    number: {
      value: 50,
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
        width: 1,
        color: "#9da8bd"
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
      speed: 10,
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

//global variables for state
var global_toggled = false;
var mode = "";

//initializes all the content
$(window).on("load", function() {
  init();
  toggler = document.getElementById("toggler");
  toggler.checked = mode == "";
  var width = $(window).width();
  var height = $(window).height();
  if (width < WIDTH_THRESHOLD || height < HEIGHT_THRESHOLD) {
    small();
  } else {
    big();
  }
});

$(window).on("resize", function() {
  var win = $(this);
  var width = $(window).width();
  var height = $(window).height();
  if (width < WIDTH_THRESHOLD || height < HEIGHT_THRESHOLD) {
    small();
  } else {
    big();
  }
});

function small() {
  var containerToggle = document.getElementById("container-toggle");
  containerToggle.className = "row left-pad on-top";
}

function big() {
  var containerToggle = document.getElementById("container-toggle");
  containerToggle.className = "row left-pad on-top-fixed";
}

function init() {
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
  history.pushState(null, null, "#" + mode);
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

function goBack() {
  document.location.assign("../index.html#hockey" + mode);
}

function revealToggle(show) {
  var toggler = document.getElementById("toggler");
  if (show) {
    toggler.className = "";
  } else {
    toggler.className = "hidden";
  }
}
