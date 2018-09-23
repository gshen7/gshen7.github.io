//constants for content
const CONTENT_KEYS = ["about", "projects", "experience", "hockey"];
const ABOUT = {
  overview:
    '<p align="justify">I\'m a <font color="blue">software engineering and business administration</font> student at the Ivey School of Business at the University of Western Ontario with software development experience in agile, test-driven, and research environments.</p>',
  interests:
    '<p align="justify"><font color="blue">Interests</font> include travelling, hiking, camping, weightlifting, playing and watching sports (particularly hockey), and playing board/card games.' +
    ' In terms of <font color="blue">technology</font> interests, I\'m excited about the future of human technology interaction, and fintech (particularly focused on increasing access to capital).</p>',
  causes:
    '<p align="justify">Two <font color="blue">causes</font> I\'m currently involved with include helping to build out the tech atmosphere within my school community as the co-president of the Ivey Technology Club.' +
    " I'm also hoping to foster a future generation of scientists, engineers, and innovators within Canada as a member of the sponsorship committee and judge for my regional science fair.</p>",
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
        "Practicing my tree pose in front of the Tre Cime di Lavaredo in the Italian Alps, 2018"
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
      caption: "Reading week trip to Hawaii, 2018"
    },
    {
      src: "resources/slides/newZealand.jpeg",
      image: true,
      caption: "Presented a publication at a conference in New Zealand, 2017"
    },
    {
      src: "resources/slides/scandinavia.jpeg",
      image: true,
      caption: "Family trip to Scandinavia, 2016"
    },
    {
      src: "resources/slides/sectionHockey.jpeg",
      image: true,
      caption:
        "Played in an Ivey Section 1 vs Section 2 hockey game to raise money for charity, 2017"
    },
    {
      src: "resources/slides/camping.jpeg",
      image: true,
      caption: "Camping at the Pinery Provincial Park, 2016"
    },
    {
      src: "resources/slides/christmas.jpeg",
      image: true,
      caption:
        "Celebrating the holidays with pizza with Western's Undergraduate Engineering Society, 2016"
    }
  ]
};
const TAGS = {
  Java: 3,
  R: 4,
  Python: 1,
  Assembly: 1,
  SQL: 2,
  NodeJS: 3,
  Meteor: 1,
  Express: 1,
  MongoDB: 2,
  "React Native": 1,
  Android: 1,
  Tableau: 1,
  Tensorflow: 1,
  Weka: 1,
  "Machine Learning": 3,
  "Web Scraping": 2
};
const PROJECTS = [
  {
    id: 10,
    title:
      "Google Cloud & NCAA ML 2018-Men's March Madness Bracket Prediction Competition",
    tags: ["R", "Machine Learning"],
    description:
      "Created a model for predicting win probabilities for all possible matchups for the NCAA 2018 Mens Basketball Tournament."
  },
  {
    id: 9,
    title: "ESPN Fantasy Hockey API",
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
      'NHL Prediction Models <i onclick="navTo(\'hockey\')" class="link fas fa-external-link-alt"></i>',
    tags: ["R", "Machine Learning", "Tensorflow", "Web Scraping", "Tableau"],
    description: "Created models for predicting various aspects of NHL hockey."
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
    tags: ["Java", "SQL", "Weka", "Machine Learning"],
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
    company: "Western University Innovation Centre for Information Engineering",
    position: "Undergraduate Researcher",
    location: "London, ON, Canada",
    date: "Nov 2015-Aug 2016",
    description:
      "Research and development in the field of communications/computing technologies and associated applications" +
      "<ul><li>Designed a novel indoor locationing model based on WiFi signal strength propagation. " +
      "Developed model for propagation and prototyped system using Android. " +
      '(Publication: <a target="_blank" href="http://ieeexplore.ieee.org/document/8066713/">A novel Wifi-based indoor localization system</a>).</li>' +
      "<li>Conducted research on improvements for machine learning based human activity recognition apps and created a model using Weka to improve recall and precision by mitigating the impact of smart phone sensor differences. " +
      '(Publication: <a target="_blank" href="http://ieeexplore.ieee.org/document/7844783/">Mitigating sensor differences for phone-based human activity recognition</a>).</li></ul>',
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
      "<li>Built automated test suite in Ruby/Rails using RSpec.</li></ul>",
    logoSource: "resources/exp-cbs.png"
  },
  {
    key: "magnet",
    company: "Magnet Forensics",
    position: "Software Developer Intern",
    location: "Waterloo, ON, Canada",
    date: "May 2017-Aug 2017",
    description:
      "Full-stack development of metric dashboard aggregating and visualizing data from various sources of forensic evidence. Used React.JS/Redux for the frontend UI connected to C# REST API endpoints to access a SQL database.",
    logoSource: "resources/exp-magnet.png"
  },
  {
    key: "microsoft",
    company: "Microsoft",
    position: "Software Engineering Intern",
    location: "Redmond, WA, USA",
    date: "May 2018-Jul 2018",
    description:
      "Created end to end service to allow for designated response individuals to configure automation workflows. Used Knockout and Kendo Components to build a frontend UI wrapper connected to a serverless Azure Logic Apps based backend that allowed for manual workflows to be automated to custom specifications.",
    logoSource: "resources/exp-microsoft.png"
  },
  {
    key: "ivey",
    company: "Ivey Business School",
    position: "Research Assistant",
    location: "London, ON, Canada",
    date: "Aug 2018-Present",
    description:
      "Writing python scripts to transpose and aggregate unstructured financial data into more human-readable tables/visualizations.",
    logoSource: "resources/exp-ivey.png"
  }
];
var HOCKEY = {
  overview:
    ' <a href="https://github.com/gshen7/tf-hockey" target="_blank"><i class="link fab fa-github"></i></a> <a href="https://public.tableau.com/profile/gshen7" target="_blank"><i class="link fas fa-chart-bar"></i></a><br/><br/>' +
    " These are the outputs of models that I've built for predicting/evaluating various aspects of the NHL." +
    ' The models are dynamic neural nets built and trained using the <i>tfestimators</i> package in R with datasets either downloaded from <a href="http://naturalstattrick.com" target="_blank"> Natural Stat Trick</a>, scraped from <a href="https://hockey-reference.com" target="_blank">Hockey Reference</a>, or pulled using the <a href="https://github.com/dword4/nhlapi">NHL stats API</a>.' +
    " </br></br>This is still very much a work in progress, both in terms of improving the models and figuring out the best way to host and display my work but here's a preview of some of the results:",
  models: [
    {
      title: "xGoals Model",
      description:
        "Model that assigns every shot/missed shot event in a game with the probability that it had of going in at the time of release." +
        " The inputs are characteristics of the shot and situation and doesn't include shooter or goalie talent."
    },
    {
      title: "Projected Points Model",
      description:
        "Predicts the final points total of a team as a whole depending on performance from the most recent two years."
    },
    {
      title: "Player Value Model",
      description:
        "Scores players based on a model that aims to capture all contributions a player makes towards the team success in terms of generating points. " +
        " This doesn't compare players in terms of ability but instead evaluates which players make the most positive impacts on their teams."
    },
    {
      title: "Playoff Bracket Prediction Model",
      description:
        "Uses data from only the regular season of that same year to generate team strengths, then worked through the bracket, comparing teams to see which was more likely to advance."
    }
  ],
  vizzes: [
    {
      title: " xGoals Results",
      image: "resources/hockey-results.png",
      id: 0,
      link: "hockey/results.html"
    },
    {
      title: " Actual vs Expected/Projected Performance",
      image: "resources/hockey-performance.png",
      id: 1,
      link: "hockey/performance.html"
    },
    {
      title: " Player Contribution to Team",
      image: "resources/hockey-skaters.png",
      id: 2,
      link: "hockey/skaters.html"
    }
  ]
};

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

$(document).ready(function() {
  //allows for clicking of items to check and uncheck project tags
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
  toggler = document.getElementById("toggler");
  toggler.checked = mode == "";
  var width = $(window).width();
  var height = $(window).height();
  var particles = document.getElementById("particles-js");
  if (width < WIDTH_THRESHOLD || height < HEIGHT_THRESHOLD) {
    initSmall();
  } else {
    initBig();
  }
});

//fill about content
function changeAbout(about) {
  var leftContent = ABOUT.overview + ABOUT.interests + "</div>";

  var leftContainer = document.getElementById("about-left");
  leftContainer.innerHTML = leftContent;

  var rightContent = ABOUT.causes + "</div>";

  var rightContainer = document.getElementById("about-right");
  rightContainer.innerHTML = rightContent;

  var smallContent =
    ABOUT.overview + "<br/>" + ABOUT.interests + "<br/>" + ABOUT.causes;

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

//fill hockey content
function changeHockey(hockey) {
  var overviewContainer = document.getElementById("hockey-overview");
  overviewContainer.innerHTML = HOCKEY.overview + "<hr/>";

  var vizContent = "<h3>Visualizations</h3>";
  for (var i = 0; i < HOCKEY.vizzes.length; i++) {
    vizContent +=
      '<div class = "border row text-center center"><br/><h4>' +
      '<i onclick="goViz(' +
      HOCKEY.vizzes[i].id +
      ')" color="cornflowerBlue" class="link fas fa-external-link-alt"></i></a>' +
      HOCKEY.vizzes[i].title +
      '</h4><img src="' +
      HOCKEY.vizzes[i].image +
      '" class="img-responsive link" onclick="goViz(' +
      HOCKEY.vizzes[i].id +
      ')"></a></div>';
  }
  var vizContainer = document.getElementById("hockey-viz");
  vizContainer.innerHTML = vizContent;

  var modelContent = "<h3>Models</h3>";
  for (var i = 0; i < HOCKEY.models.length; i++) {
    modelContent +=
      '<div class = "border row text-center center"><br/><h4>' +
      HOCKEY.models[i].title +
      "</h4><i>" +
      HOCKEY.models[i].description +
      "</i></div>";
  }
  var modelContainer = document.getElementById("hockey-model");
  modelContainer.innerHTML = modelContent;

  var smallContent = HOCKEY.overview + "<hr/><h3>Visualizations</h3>";

  for (var i = 0; i < HOCKEY.vizzes.length; i++) {
    smallContent +=
      '<div class = "border row text-center center"><br/><h4>' +
      HOCKEY.vizzes[i].title +
      '</h4><img src="' +
      HOCKEY.vizzes[i].image +
      '" class="img-responsive link" onclick="goViz(' +
      HOCKEY.vizzes[i].id +
      ')"></a></div>';
  }

  smallContent += "<h3>Models</h3>";

  for (var i = 0; i < HOCKEY.models.length; i++) {
    smallContent +=
      '<div class = "border row text-center center"><br/><h4>' +
      HOCKEY.models[i].title +
      "</h4><br/>" +
      "<i>" +
      HOCKEY.models[i].description +
      "</i></div>";
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

//navigate to hockey viz pages
function goViz(linkID) {
  document.location.assign(HOCKEY.vizzes[linkID].link + "#" + mode);
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
  changeWells(EXPERIENCE);
  changeHockey(HOCKEY);
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
  var tagOptions = Object.keys(TAGS).map(function(t) {
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

  var tagOptions = Object.keys(TAGS).map(function(t) {
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
