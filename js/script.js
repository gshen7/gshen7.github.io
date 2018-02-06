const CONTENT_KEYS = ["about", "projects", "experience", "hockey"];
const ABOUT = {
  overview: {
    description:
      'I\'m a <font color="blue">computer engineering and business administration</font> student at the Ivey School of Business at the University of Western Ontario with software development experience in agile, test-driven, and research environments.',
    img: "resources/about-overview.png"
  },
  interests: {
    description:
      '<font color="blue">Interests</font> include travelling, playing and watching sports (particularly hockey), and playing board/card games.',
    img: "resources/about-interests.png"
  }
};
const TAGS = {
  Java: 3,
  R: 3,
  Python: 1,
  Assembly: 1,
  SQL: 2,
  NodeJS: 3,
  Meteor: 1,
  Express: 1,
  MongoDB: 2,
  "React Native": 1,
  Android: 1,
  Tensorflow: 1,
  "Machine Learning": 2,
  "Web Scraping": 2
};
const PROJECTS = [
  {
    id: 9,
    title:
      'ESPN Fantasy Hockey API <a href="#hockey" onclick="navTo(\'hockey\')" class="fa fa-external-link-square"></a>',
    tags: ["R", "Web Scraping"],
    description:
      "Scraped data from ESPN fantasy hockey and created a RESTful API using the plumber package in R. Allows for access to day by day stats, team rosters, league rules, and transactions."
  },
  {
    id: 8,
    title: "LineApp",
    tags: ["React Native", "NodeJS", "MongoDB", "Express"],
    description:
      "A proof of concept mobile application for crowd sourcing the lengths of lines. Users check in to a line to receive a promotional offer that is scanned upon checkout, which automatically checks them out of the line."
  },
  {
    id: 7,
    title: "IOU",
    tags: ["NodeJS", "Meteor", "MongoDB"],
    description:
      "A web application simplifying the process for collecting money from friends using the PayPal API. Allows users to request, track and make payments."
  },
  {
    id: 6,
    title:
      'NHL Prediction Models <a href="#hockey" onclick="navTo(\'hockey\')" class="fa fa-external-link-square"></a>',
    tags: ["R", "Machine Learning", "Tensorflow", "Web Scraping"],
    description:
      'Created models for predicting various aspects of NHL hockey (<a href="#hockey" onclick="navTo(\'hockey\')">details</a>)'
  },
  {
    id: 5,
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
    id: 4,
    title: "Bike Alarm",
    tags: ["Assembly"],
    description:
      "An HC12 microcontroller attachment to a stationary exercise bicycle that plays an alarm sound until a certain distance measured by wheel rotations is travelled. Created to address the alarming trend of decreasing physical activity and to be used in conjunction with a timed electrical outlet to serve as an alarm clock that promotes physical activity as a part of the waking routine."
  },
  {
    id: 3,
    title: "Support and Resistance Line Generator",
    tags: ["R"],
    description:
      "An algorithm to determine and plot support and resistance lines onto stock charts."
  },
  {
    id: 2,
    title: "BikeSafe for V2V",
    tags: ["Java", "Python", "Android"],
    description:
      "A proof of concept smartwatch app to detect cyclists' hand signals for the purpose of allowing cyclists to integrate into vehicle to vehicle communication protocols of the future."
  },
  {
    id: 1,
    title: "Smart Bed Monitoring System",
    tags: ["Java", "SQL", "Machine Learning"],
    description:
      "A machine learning based system for detecting bed-related scenarios and monitoring sleep patterns and sending alerts for certain situations. Used simple, non-intrusive piezoelectric force sensors transmitting readings via ZigBee nodes in real time. Stored historical data in a SQL database for use in trending health history."
  },
  {
    id: 0,
    title: "RFID Object Locator",
    tags: ["Java", "SQL"],
    description:
      "A system for locating items with RFID tags attached to them using an RFID scanner. Tracked item-tag pairings in a SQL database to allow for only specific items selected in JavaFX frontend to be tracked."
  }
];
const EXPERIENCE = [
  {
    key: "uwo",
    company: "Western University ECE Research Group",
    position: "Undergraduate Researcher",
    location: "London, ON, Canada",
    date: "Nov 2015-Aug 2016",
    description:
      "Research and development in the field of communications/computing technologies and associated applications" +
      '<ul><li>Designed a novel indoor locationing technique based on WiFi signal strength propagation. Developed model for propagation and prototyped system using Android. (Publication: <a target="_blank" href="http://ieeexplore.ieee.org/document/8066713/">A novel Wifi-based indoor localization system</a>).</li>' +
      '<li>Researched methods of improving human activity recognition apps through machine learning methods. (Publication: <a target="_blank" href="http://ieeexplore.ieee.org/document/7844783/">Mitigating sensor differences for phone-based human activity recognition</a>).</li></ul>',
    logoSource: "resources/exp-uwo.png"
  },
  {
    key: "cbs",
    company: "Cambridge Brain Sciences",
    position: "Student Developer",
    location: "London, ON, Canada",
    date: "Jan 2017-May 2017",
    description:
      "Modernized suite of brain games used for cognitive tests." +
      "<ul><li>Ported games from flash player to more modernized technology stack (Ruby/Rails and ReactJS/Redux).</li><li>Developed model for standardizing scores of old tests so that past data remained relevant and comparable to new results.</li>" +
      "<li>Built automated test suite in Ruby/Rails using RSpec and contributed to behaviour testing of modern version of games, ensuring behaviour replicated old version.</li></ul>",
    logoSource: "resources/exp-cbs.png"
  },
  {
    key: "magnet",
    company: "Magnet Forensics",
    position: "Software Developer Co-op",
    location: "Waterloo, ON, Canada",
    date: "May 2017-Aug 2017",
    description:
      "Full-stack development of metric dashboard aggregating testing data from various sources. Used React.JS/Redux for the frontend UI connected to C# REST API endpoints to access a SQL database." +
      "<ul><li>Created dashboard page for viewing results of automated regression tests using Jenkins API.</li><li>Added ability to mark certain automated test runs as outliers and a view to display metric deltas between runs.</li>" +
      "<li>Designed and implemented view to show health of product features over a history of code changes.</li><li>Integrated dashboard with Jira API to track expected hit counts to ease process of maintaining a golden baseline.</li>" +
      "<li>Created widget to display status of installer and expect new files into the known installer files.</li></ul>" +
      "Winforms FlexNet Licensing Tool Development." +
      "<ul><li>Multithreaded requests to FlexNet API to create a more robust process for pulling data.</li><li>Designed and implemented previewing functionality to display a customer's existing licenses, improving license renewal and removal process.</li></ul>",
    logoSource: "resources/exp-magnet.png"
  }
];
const HOCKEY = {
  link: "https://github.com/gshen7/tf-hockey",
  overview:
    "This is some of the work I've been doing relating to NHL data/stat analysis." +
    ' I\'ve made a couple predictive models <a href="https://github.com/gshen7/tf-hockey" target="_blank" class="fa fa-github"></a> for hockey prediction and a fantasy hockey data API <a href="https://github.com/gshen7/fantasy-hockey" target="_blank" class="fa fa-github"></a>.' +
    ' The models are neural nets built and trained using the <i>tfestimators</i> package in R with datasets either downloaded from <a href="naturalstattrick.com" target="_blank"> Natural Stat Trick</a>, scraped from <a href="hockey-reference.com" target="_blank">Hockey Reference</a>, or pulled using the NHL stats API.' +
    ' The API scrapes data from <a href="http://www.espn.com/fantasy/hockey/">ESPN fantasy hockey</a> and makes it available via an API using the <i>plumber</i> package in R.' +
    " </br></br>This is still very much a work in progress, both in terms of improving the models/API and figuring out the best way to host and display my work but here's a preview of some of the results:",
  work: [
    {
      description:
        "Projected points for the 2017-2018 season (Vegas not included because predictions depend on stats from previous years)." +
        " Overall, these projections seemed pretty reasonable to me, with a few anomalies.",
      img: "resources/hockey-points.png"
    },
    {
      description:
        "Top 30 players based on my model (as of the start of the 2017-2018 season)." +
        ' The "score" is a wholistic metric that aims to capture everything a player does to contribute to team success.' +
        " These results are admittedly a little unexpected but it's promising that some of the names you'd expect are at least in the top 30 (Mcdavid, Crosby, Bergeron, Karlsson, Doughty, Burns).",
      img: "resources/hockey-individual.png"
    },
    {
      description:
        "Playoff bracket prediction model for last year's playoffs (as of the end of the 2016-2017 regular season)." +
        " I used data from only the regular season of that same year to generate team strengths, then worked through the bracket, comparing teams to see which was more likely to advance.",
      img: "resources/hockey-bracket.png"
    },
    {
      description:
        "Teams ranked by xGoals percentages based on my model which assigns every shot/missed shot event in a game with a probability of going in based on the following:" +
        "<br/><br/> Time (both remaining in the game and period), distance and angle from the net, type of shot (either slapshot, snapshot, backhand, wristshot, wraparound, deflection), current score, shooter's team (home or away), time and distance of the previous event, type of event prior to the shot (either hit, missed/blocked/on net shot, giveaway, takeaway, faceoff)",
      img: "resources/hockey-xgoals.png"
    },
    {
      description:
        "Plotted day by day fantasy hockey standings (points) in my current fantasy hockey league.",
      img: "resources/hockey-fantasy.png"
    }
  ]
};

//returns configuration for particles background
function PARTICLES_CONFIG(isBig) {
  var obj = {
    particles: {
      number: {
        value: isBig ? 100 : 25,
        density: {
          enable: false
        }
      },
      color: {
        value: "#000000"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "#ffffff"
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
        value: 0.25,
        random: false,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#ffffff",
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
          distance: isBig ? 300 : 150,
          size: 10,
          duration: 0.25,
          opacity: 1,
          speed: 500
        },
        repulse: {
          distance: isBig ? 300 : 150,
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
  return obj;
}

const WIDTH_THRESHOLD = 1150;
const HEIGHT_THRESHOLD = 600;

var currentActive = "home";
var selectedTags = Object.keys(TAGS);
var searchKey = "";
var size = "sm";
var particles = "on";

//allows for clicking of items to check and uncheck project tags
$(document).ready(function() {
  $("#projects-tag-filter, #sm-projects-tag-filter").on("click", function(
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
    } else if (tag.className !== "divider") {
      tag = tag.childNodes[1].nodeValue.trim();
      changeCheck(tag);
    }
    event.stopPropagation();
  });

  $(window).on("resize", function() {
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
$(window).on("load", function() {
  init();
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
  var overviewContent =
    '<img src="' +
    ABOUT.overview.img +
    '" class="img-circle img-responsive portrait"><hr/>' +
    ABOUT.overview.description +
    "</div>";

  var overviewContainer = document.getElementById("about-overview");
  overviewContainer.innerHTML = overviewContent;

  var interestsContent =
    '<img src="' +
    ABOUT.interests.img +
    '" class="img-circle img-responsive portrait"><hr/>' +
    ABOUT.interests.description +
    "</div>";

  var interestsContainer = document.getElementById("about-interests");
  interestsContainer.innerHTML = interestsContent;

  var smallContent =
    ABOUT.overview.description +
    "<br/><br/>" +
    ABOUT.interests.description +
    '<br/><br/><table><tr><td><img src="' +
    ABOUT.overview.img +
    '" class="img-thumbnail img-responsive album"></td><td><img src="' +
    ABOUT.interests.img +
    '" class="img-thumbnail img-responsive album"></td></tr></table>';

  var smallContainer = document.getElementById("sm-about-container");
  smallContainer.innerHTML = smallContent;
}

//handle select all or select none click
function changeAllCheck(checked) {
  for (var i = 0; i < Object.keys(TAGS).length; i++) {
    var tagCheck = document.getElementById(Object.keys(TAGS)[i] + "-check");
    tagCheck.className = "fa fa-" + (checked ? "check-" : "") + "square-o";
    var smallTagCheck = document.getElementById(
      "sm-" + Object.keys(TAGS)[i] + "-check"
    );
    smallTagCheck.className = "fa fa-" + (checked ? "check-" : "") + "square-o";
  }

  changeSelectedTags();
}

//handle click on tag
function changeCheck(tag) {
  var tagCheck = document.getElementById(tag + "-check");
  tagCheck.className =
    "fa fa-" +
    (tagCheck.className.includes("check") ? "" : "check-") +
    "square-o";
  var smallTagCheck = document.getElementById("sm-" + tag + "-check");
  smallTagCheck.className =
    "fa fa-" +
    (smallTagCheck.className.includes("check") ? "" : "check-") +
    "square-o";
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

//fill hockey content
function changeHockey(hockey) {
  var overviewContainer = document.getElementById("hockey-overview");
  overviewContainer.innerHTML = HOCKEY.overview + "<hr/>";

  var workContent = "";
  for (var i = 0; i < HOCKEY.work.length; i++) {
    workContent +=
      '<div class = "border col-md-6 text-center center"><i><br/>' +
      HOCKEY.work[i].description +
      "</i><br/><br/><br/>" +
      '<img src="' +
      HOCKEY.work[i].img +
      '" class="img-responsive"></div>';
  }
  var workContainer = document.getElementById("hockey-work");
  workContainer.innerHTML = workContent;

  var smallContent = HOCKEY.overview + "<hr/>";

  for (var i = 0; i < HOCKEY.work.length; i++) {
    smallContent +=
      "<i>" +
      HOCKEY.work[i].description +
      "</i><br/><br/><br/>" +
      '<img src="' +
      HOCKEY.work[i].img +
      '" class="img-responsive"><hr/>';
  }

  var smallContainer = document.getElementById("sm-hockey-container");
  smallContainer.innerHTML = smallContent;
}

//handle mouseover of projects
function changePanels(filteredProjects) {
  var panels = filteredProjects.map(function(p) {
    var out =
      '<div class="panel panel-default" id="project-' +
      p.id +
      '-panel"><div class="panel-heading" onmouseover="expandProject(' +
      p.id +
      ')">' +
      p.title +
      '</div><div class="panel-body">';
    for (var i = 0; i < p.tags.length; i++) {
      out += '  <span class="label label-default">' + p.tags[i] + "</span>";
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

  panels = filteredProjects.map(function(p) {
    var out =
      '<div class="panel panel-default" id="sm-project-' +
      p.id +
      '-panel"><div class="panel-heading" onmouseover="expandProject(' +
      p.id +
      ')">' +
      p.title +
      '</div><div class="panel-body">';
    for (var i = 0; i < p.tags.length; i++) {
      out += '  <span class="label label-default">' + p.tags[i] + "</span>";
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
    var tagCheck = document.getElementById(Object.keys(TAGS)[i] + "-check");
    if (tagCheck.className.includes("check")) {
      selectedTags.push(Object.keys(TAGS)[i]);
    }
  }
  updateTagsFilter();
  filterProjects();
}

//change which experience is showing
function changeWells(experience) {
  var thumbs = experience.map(function(e) {
    return (
      '<td class="text-center"><a onmouseover="expandExperience(\'' +
      e.key +
      '\')"><img src="' +
      e.logoSource +
      '" id="' +
      e.key +
      '-thumb" class="img-small img-thumbnail img-responsive"></a></td>'
    );
  });

  var thumbnailContainer = document.getElementById("experience-thumbs");
  thumbnailContainer.innerHTML = thumbs.join(" ");

  var thumbs = experience.map(function(e) {
    return (
      '<td class="text-center"><a onmouseover="expandExperience(\'' +
      e.key +
      '\')"><img src="' +
      e.logoSource +
      '" id="sm-' +
      e.key +
      '-thumb" class="img-small img-thumbnail img-responsive"></a></td>'
    );
  });

  thumbnailContainer = document.getElementById("sm-experience-thumbs");
  thumbnailContainer.innerHTML = thumbs.join(" ");

  var divs = experience.map(function(e) {
    return (
      '<div class="col-md-12 collapse" id="' +
      e.key +
      '-collapse"><h4 class="text-center">' +
      e.company +
      '</h4><br/><i><table class="text-center"><tr><td>' +
      e.position +
      "</td><td>" +
      e.location +
      "</td><td>" +
      e.date +
      '</td></tr></table></i><hr/><div class="well text-justify">' +
      e.description +
      "</div></div>"
    );
  });

  var experienceContainer = document.getElementById("experience-container");
  experienceContainer.innerHTML = divs.join(" ");

  divs = experience.map(function(e) {
    return (
      '<div class="col-md-12 collapse" id="sm-' +
      e.key +
      '-collapse"><h4 class="text-center">' +
      e.company +
      '</h4><br/><i><table class="text-center"><tr><td>' +
      e.position +
      "</td></tr><tr><td>" +
      e.location +
      "</td></tr><tr><td>" +
      e.date +
      '</td></tr></table></i><hr/><div class="well">' +
      e.description +
      "</div></div>"
    );
  });

  var smallExperienceContainer = document.getElementById(
    "sm-experience-container"
  );
  smallExperienceContainer.innerHTML = divs.join(" ");
}

//handle changing of experience displayed
function expandExperience(key) {
  for (var i = 0; i < EXPERIENCE.length; i++) {
    if (key !== EXPERIENCE[i].key) {
      var thumb = document.getElementById(EXPERIENCE[i].key + "-thumb");
      thumb.className = thumb.className.replace("faded", "");
      var content = document.getElementById(EXPERIENCE[i].key + "-collapse");
      content.className = content.className.replace("in", "");
      var smallContent = document.getElementById(
        "sm-" + EXPERIENCE[i].key + "-collapse"
      );
      smallContent.className = smallContent.className.replace("in", "");
    } else {
      var thumb = document.getElementById(EXPERIENCE[i].key + "-thumb");
      thumb.className = thumb.className.includes("faded")
        ? thumb.className
        : thumb.className + " faded";
      var content = document.getElementById(EXPERIENCE[i].key + "-collapse");
      content.className = content.className.includes("in")
        ? content.className
        : content.className + " in";
      var smallContent = document.getElementById(
        "sm-" + EXPERIENCE[i].key + "-collapse"
      );
      smallContent.className = smallContent.className.includes("in")
        ? smallContent.className
        : smallContent.className + " in";
    }
  }
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
  var filteredProjects = PROJECTS.filter(function(p) {
    return (
      p.title.toUpperCase().includes(searchKey.toUpperCase()) ||
      p.description.toUpperCase().includes(searchKey.toUpperCase())
    );
  });
  filteredProjects = filteredProjects.filter(function(p) {
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

function init() {
  changeAbout(ABOUT);
  changePanels(PROJECTS);
  changeWells(EXPERIENCE);
  changeHockey(HOCKEY);
  updateTagsFilter(true);
  filterProjects();
  var anchor = window.location.hash.substr(1);
  if (CONTENT_KEYS.includes(anchor)) {
    navTo(anchor);
  } else {
    history.pushState(null, null, "#");
  }
}

//initialize big display
function initBig() {
  var containerSm = document.getElementById("container-sm");
  containerSm.className = "collapse";
  size = "lg";
  particlesJS("particles-js", PARTICLES_CONFIG(true));
  var containerLg = document.getElementById("container-lg");
  containerLg.className = "";
}

//initialize small display
function initSmall() {
  var containerLg = document.getElementById("container-lg");
  containerLg.className = "collapse";
  particlesJS("particles-js", PARTICLES_CONFIG(false));
  var containerSm = document.getElementById("container-sm");
  containerSm.className = "";
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
    history.pushState(null, null, "#");
  } else {
    var newPill = document.getElementById(newActive + "-pill");
    newPill.className = "active";
    var newSmallPill = document.getElementById("sm-" + newActive + "-pill");
    newSmallPill.className = "active";

    changeContent(newActive);
    history.pushState(null, null, "#" + newActive);
  }
}

//handle resizing
function resizeBig() {
  if (size != "lg") {
    var containerSm = document.getElementById("container-sm");
    containerSm.className = "collapse";
    particlesJS("particles-js", PARTICLES_CONFIG(true));
    var containerLg = document.getElementById("container-lg");
    containerLg.className = "";
    size = "lg";
  }
}

//handle resizing
function resizeSmall() {
  if (size != "sm") {
    var containerLg = document.getElementById("container-lg");
    containerLg.className = "collapse";
    particlesJS("particles-js", PARTICLES_CONFIG(false));
    var containerSm = document.getElementById("container-sm");
    containerSm.className = "";
    size = "sm";
  }
}

//show and hide particles
function toggleParticles() {
  var particles = document.getElementById("particles-js");
  if (particles.className.length === 0) {
    particles.className = "hidden";
  } else {
    particles.className = "";
  }
  particlesJS("particles-js", PARTICLES_CONFIG(size === "lg"));
}

//update appearance of tags checklist
function updateTagsFilter(first) {
  var tagOptions = Object.keys(TAGS).map(function(t) {
    var out = '<li class="keep-open"><a><i id="' + t + '-check" class="fa fa-';
    if (selectedTags.includes(t) && !first) {
      out += "check-";
    }
    out +=
      'square-o"></i> ' +
      t +
      ' <span class="badge">' +
      TAGS[t] +
      "</span></a></li>";
    return out;
  });

  var projectsTagFilter = document.getElementById("projects-tag-filter");
  projectsTagFilter.innerHTML =
    '<li class="keep-open"><a>Select All</a></li><li class="keep-open"><a>Select None</a></li><li class="divider"/>' +
    tagOptions.join(" ");

  var tagOptions = Object.keys(TAGS).map(function(t) {
    var out =
      '<li class="keep-open"><a><i id="sm-' + t + '-check" class="fa fa-';
    if (selectedTags.includes(t) && !first) {
      out += "check-";
    }
    out +=
      'square-o"></i>' +
      t +
      ' <span class="badge">' +
      TAGS[t] +
      "</span></a></li>";
    return out;
  });

  var projectsTagFilter = document.getElementById("sm-projects-tag-filter");
  projectsTagFilter.innerHTML =
    '<li class="keep-open"><a>Select All</a></li><li class="keep-open"><a>Select None</a></li><li class="divider"/>' +
    tagOptions.join(" ");
}
