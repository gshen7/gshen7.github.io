const EXPERIENCE_KEYS = ["magnet", "cbs", "uwo"];
const TAGS = [
    "NodeJS", //0
    "Java", //1
    "Meteor", //2
    "Android", //3
    "R", //4
    "MATLAB", //5
    "MongoDB", //6
    "MySQL", //7
    "Machine Learning", //8
];
const TAGS_COUNT = {
    "NodeJS": 2,
    "Java": 5,
    "Meteor": 1,
    "Android": 2,
    "R": 2,
    "MATLAB": 1,
    "MongoDB": 1,
    "MySQL": 1,
    "Machine Learning": 3, 
}
const PROJECTS = [
    {
        id: 0,
        title: "IOU",
        tags: [TAGS[0], TAGS[2], TAGS[6]],
        description: "[In Progress] A web application simplifying the process for collecting money from friends using the PayPal API.",
    },
    {
        id: 1,
        title: "NHL Prediction Model",
        tags: [TAGS[4], TAGS[8]],
        description: "A model for predicting various aspects of NHL games. Used the perceptron machine learning algorithm to create a model to predict which teams will make the playoffs based on input factors of various season stats. Also created regression models for (A) evaluating players based on a single number metric, aggregating contributions on a game by game basis; and (B) predicting fantasy hockey points based on recent stats.",
    },
    {
        id: 2,
        title: "Group Tools Chatbot",
        tags: [TAGS[0]],
        description: "A Facebook messenger chatbot to add several tools for group chats. Tools were a gold star tracker, list randomizer and selector, and reaction picture library.",
    },
    {
        id: 3,
        title: "Support and Resistance Line Generator",
        tags: [TAGS[4]],
        description: "A platform to determine and plot support and resistance lines based on stock charts.",
    },
    {
        id: 4,
        title: "BikeSafe for V2V",
        tags: [TAGS[1], TAGS[3]],
        description: "A smartwatch app to detect cyclists' hand signals.",
    },
    {
        id: 5,
        title: "Indoor Locationing App",
        tags: [TAGS[1], TAGS[3]],
        description: "A novel indoor locationing technique based on a self-developed WiFi signal strength propagation based model.",
    },
    {
        id: 6,
        title: "Activity Tracking App",
        tags: [TAGS[1], TAGS[3], TAGS[5], TAGS[8]],
        description: "A machine learning based app to track physical activities throughout the day. Could distinguish between walking, running, stairs, and sitting.",
    },
    {
        id: 7,
        title: "Smart Bed Monitoring System",
        tags: [TAGS[1], TAGS[8]],
        description: "A machine learning based system for detecting bed-related scenarios and monitoring sleep patterns using simple, non-intrusive piezoelectric force sensors.",
    },
    {
        id: 8,
        title: "RFID Object Locator",
        tags: [TAGS[1], TAGS[7]],
        description: "A system for locating tagged items.",
    },
]
const WIDTH_THRESHOLD = 1160;
const HEIGHT_THRESHOLD = 1450;

var currentActive = "home";
var selectedTags = TAGS;

$(document).ready(function() {
    $( '#projects-tag-filter' ).on( 'click', function( event ) {
        var tag;
        if(event.target.className==="badge" || event.target.type==="checkbox"){
            tag = event.target.parentElement;
        } else {
            tag = event.target;
        }
        tag = tag.childNodes[1].nodeValue.trim();
        changeCheck(tag);
        event.stopPropagation();
    });
    $(window).on('resize', function(){
        var win = $(this); 
        var width = $(window).width();
        var height = $(window).height();
        if(width<WIDTH_THRESHOLD || height<HEIGHT_THRESHOLD){
            resizeSmall();
        } else {
            resizeBig();
        }
  });
});

$( window ).on( "load", function() {
    init();
    var width = $(window).width();
    if(width<WIDTH_THRESHOLD || height<HEIGHT_THRESHOLD){
        initSmall();
    } else {
        initBig();
    }
});

function changeCheck(tag){
    var tagCheck = document.getElementById(tag+"-check");
    tagCheck.checked = !tagCheck.checked;
    changeSelectedTags();
}

function changeContent(newActive){
    var oldContentDiv = document.getElementById("content-div-" + currentActive);
    var newContentDiv = document.getElementById("content-div-" + newActive);
    if(oldContentDiv && !oldContentDiv.className.includes("hidden")){
        oldContentDiv.className = oldContentDiv.className + " hidden";
    }
    if(newContentDiv.className.includes("hidden")){
        newContentDiv.className = newContentDiv.className.replace("hidden", "");
        var leftSidebar = document.getElementById("left-sidebar");
        leftSidebar.className = leftSidebar.className.replace("col-md-offset-3", "");
        var rightSidebar = document.getElementById("right-sidebar");
        rightSidebar.className = rightSidebar.className.replace("col-md-offset-6", "col-md-offset-9");
    } 

    oldContentDiv = document.getElementById("sm-content-div-" + currentActive);
    newContentDiv = document.getElementById("sm-content-div-" + newActive);
    if(oldContentDiv && !oldContentDiv.className.includes("hidden")){
        oldContentDiv.className = oldContentDiv.className + " hidden";
    }
    if(newContentDiv.className.includes("hidden")){
        newContentDiv.className = newContentDiv.className.replace("hidden", "");
    } 
    
    currentActive=newActive;
}

function changePanels(filteredProjects){
    var panels = filteredProjects.map(function(p) {
        var out = "<div class=\"panel panel-default\"><div class=\"panel-heading\" data-toggle=\"collapse\" href=\"#project-" + p.id + "-collapse\">" + p.title + "</div><div class=\"panel-body\">";
        for(let i=0;i<p.tags.length;i++){
            out += "  <span class=\"label label-default\">" + p.tags[i] + "</span>";
        }
        out += "<div class=\"collapse\" id=\"project-" + p.id + "-collapse\"><br/>" + p.description + "</div></div></div>";
        return out;
    });

    var projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = panels.join(" ");
}

function changeSelectedTags(){
    selectedTags = [];
    for(let i=0;i<TAGS.length;i++){
        var tagCheck = document.getElementById(TAGS[i]+"-check");
        if(tagCheck.checked){
            selectedTags.push(TAGS[i]);
        }
    }
    updateTagsFilter();
    filterProjects();
}

function changeText(text, id){
    var display = document.getElementById(id);
    display.innerHTML = text;
}

function expandExperience(key){
    for(let i=0;i<EXPERIENCE_KEYS.length;i++){
        if(key!==EXPERIENCE_KEYS[i]){
            var thumb = document.getElementById(EXPERIENCE_KEYS[i]+"-thumb");
            thumb.className = thumb.className.replace("faded", "");
            var content = document.getElementById(EXPERIENCE_KEYS[i]+"-collapse");
            content.className = content.className.replace("in", "");
        } else {
            var thumb = document.getElementById(EXPERIENCE_KEYS[i]+"-thumb");
            thumb.className = thumb.className.includes("faded") ? thumb.className : thumb.className + " faded";
            var content = document.getElementById(EXPERIENCE_KEYS[i]+"-collapse");
            content.className = content.className.includes("in") ? content.className : content.className+" in";
        }
    }
}

function filterProjects(){
    var searchInput = document.getElementById('proj-search');
    var searchKey = searchInput.value;
    
    var filteredProjects = PROJECTS.filter(function(p){
        return p.title.includes(searchKey) || p.description.includes(searchKey);
    })
    filteredProjects = filteredProjects.filter(function(p){
        for(let i=0;i<selectedTags.length;i++){
            if(p.tags.includes(selectedTags[i])){
                return true;
            }
        }
        return false;
    })
    changePanels(filteredProjects);
}

function init(){
    changePanels(PROJECTS);
    updateTagsFilter(true);
    filterProjects();
}

function initBig(){
    var containerLg = document.getElementById("container-lg");
    containerLg.className="";
    var containerSm = document.getElementById("container-sm");
    containerSm.className="collapse";    
}

function initSmall(){
    var containerLg = document.getElementById("container-lg");
    containerLg.className="collapse";
    var containerSm = document.getElementById("container-sm");
    containerSm.className="";    
}

function navTo(newActive){
    var oldPill = document.getElementById(currentActive+"-pill");
    if(oldPill){
        oldPill.className="inactive";
    }
    var newPill = document.getElementById(newActive+"-pill");
    newPill.className="active";
    changeContent(newActive);
}

function resizeBig(){
    var containerLg = document.getElementById("container-lg");
    containerLg.className="";
    var containerSm = document.getElementById("container-sm");
    containerSm.className="collapse";
}

function resizeSmall(){
    var containerLg = document.getElementById("container-lg");
    containerLg.className="collapse";
    var containerSm = document.getElementById("container-sm");
    containerSm.className="";   
}

function updateTagsFilter(first){
    var tagOptions = TAGS.map(function(t) {
        var out = "<li class=\"keep-open\"><a href=\"#\"><input type=\"checkbox\" id=\"" + t + "-check\" disabled ";
        if(selectedTags.includes(t) && !first){
            out += "checked";
        } 
        out += "/> " + t + " <span class=\"badge\">" + TAGS_COUNT[t] + "</span></a></li>";
        return out;
    });

    var projectsTagFilter = document.getElementById('projects-tag-filter');
    projectsTagFilter.innerHTML = tagOptions.join(" ");
}