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
        id: 8,
        title: "IOU",
        tags: [TAGS[0], TAGS[2], TAGS[6]],
        description: "[In Progress] A web application simplifying the process for collecting money from friends using the PayPal API.",
    },
    {
        id: 7,
        title: "NHL Prediction Model",
        tags: [TAGS[4], TAGS[8]],
        description: "A model for predicting various aspects of NHL games. Used the perceptron machine learning algorithm to create a model to predict which teams will make the playoffs based on input factors of various season stats. Also created regression models for (A) evaluating players based on a single number metric, aggregating contributions on a game by game basis; and (B) predicting fantasy hockey points based on recent stats.",
    },
    {
        id: 6,
        title: "Group Tools Chatbot",
        tags: [TAGS[0]],
        description: "A Facebook messenger chatbot to add several tools for group chats. Tools were a gold star tracker, list randomizer and selector, and reaction picture library.",
    },
    {
        id: 5,
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
        id: 3,
        title: "Indoor Locationing App",
        tags: [TAGS[1], TAGS[3]],
        description: "A novel indoor locationing technique based on a self-developed WiFi signal strength propagation based model.",
    },
    {
        id: 2,
        title: "Activity Tracking App",
        tags: [TAGS[1], TAGS[3], TAGS[5], TAGS[8]],
        description: "A machine learning based app to track physical activities throughout the day. Could distinguish between walking, running, stairs, and sitting.",
    },
    {
        id: 1,
        title: "Smart Bed Monitoring System",
        tags: [TAGS[1], TAGS[8]],
        description: "A machine learning based system for detecting bed-related scenarios and monitoring sleep patterns using simple, non-intrusive piezoelectric force sensors.",
    },
    {
        id: 0,
        title: "RFID Object Locator",
        tags: [TAGS[1], TAGS[7]],
        description: "A system for locating tagged items.",
    },
]
const EXPERIENCE = [
     {
        key: "magnet",
        company: "Magnet Forensics",
        position: "Software Developer Co-op",
        location: "Waterloo, ON, Canada",
        date: "May 2017-Aug 2017",
        description: "Full-stack development of dashboard aggregating various metrics.",
        logoSource: "resources/exp-magnet.png"
    },
    {
        key: "cbs",
        company: "Cambridge Brain Sciences",
        position: "Student Developer",
        location: "London, ON, Canada",
        date: "Jan 2017-May 2017",
        description: "Porting puzzles used for cognitive evalations from flash player to HTML5 and JS to modernize platform.",
        logoSource: "resources/exp-cbs.png"
    },
    {
        key: "uwo",
        company: "Western University ECE Research Group",
        position: "Undergraduate Researcher",
        location: "London, ON, Canada",
        date: "Nov 2015-Aug 2016",
        description: "Research and development of smartphone based human activity recognition and indoor locationing. <br/>Publications: <br/>A novel Wifi-based indoor localization system <br/><a href=\"http://ieeexplore.ieee.org/document/7844783/\">Mitigating sensor differences for phone-based human activity recognition",
        logoSource: "resources/exp-uwo.png"
    },
]
const WIDTH_THRESHOLD = 1160;
const HEIGHT_THRESHOLD = 450;

var currentActive = "home";
var selectedTags = TAGS;
var searchKey = "";

$(document).ready(function() {
    $( '#projects-tag-filter, #sm-projects-tags-filter' ).on( 'click', function( event ) {
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
    var height = $(window).height();
    if(width<WIDTH_THRESHOLD || height<HEIGHT_THRESHOLD){
        initSmall();
    } else {
        initBig();
    }
});

function changeCheck(tag){
    var tagCheck = document.getElementById(tag+"-check");
    tagCheck.checked = !tagCheck.checked;
    var smallTagCheck = document.getElementById("sm-" + tag+"-check");
    smallTagCheck.checked = !smallTagCheck.checked;
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

    panels = filteredProjects.map(function(p) {
        var out = "<div class=\"panel panel-default\"><div class=\"panel-heading\" data-toggle=\"collapse\" href=\"#sm-project-" + p.id + "-collapse\">" + p.title + "</div><div class=\"panel-body\">";
        for(let i=0;i<p.tags.length;i++){
            out += "  <span class=\"label label-default\">" + p.tags[i] + "</span>";
        }
        out += "<div class=\"collapse\" id=\"sm-project-" + p.id + "-collapse\"><br/>" + p.description + "</div></div></div>";
        return out;
    });

    var smallProjectsContainer = document.getElementById('sm-projects-container');
    smallProjectsContainer.innerHTML = panels.join(" ");
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

function changeWells(experience){
    var thumbs = experience.map(function(e){
        return "<td class=\"text-center\"><a onmouseover=\"expandExperience('" + e.key +
            "')\"><img src=\"" + e.logoSource + 
            "\" id=\"" + e.key +
            "-thumb\" class=\"img-small img-thumbnail img-responsive\"></a></td>";
    });

    var thumbnailContainer = document.getElementById("experience-thumbs");
    thumbnailContainer.innerHTML = thumbs.join(" ");

    var thumbs = experience.map(function(e){
        return "<td class=\"text-center\"><a onmouseover=\"expandExperience('" + e.key +
            "')\"><img src=\"" + e.logoSource + 
            "\" id=\"sm-" + e.key +
            "-thumb\" class=\"img-small img-thumbnail img-responsive\"></a></td>";
    });

    thumbnailContainer = document.getElementById("sm-experience-thumbs");
    thumbnailContainer.innerHTML = thumbs.join(" ");
    
    
    var divs = experience.map(function(e) {
        return "<div class=\"col-md-12 collapse\" id=\"" + e.key + 
            "-collapse\"><h4 class=\"text-center\">" + e.company + 
            "</h4><br/><i><table class=\"text-center\"><tr><td>" + e.position +
            "</td><td>" + e.location +
            "</td><td>" + e.date +
            "</td></tr></table></i><hr/><div class=\"well text-justify\">" + e.description +
            "</div></div>";
    });

    var experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = divs.join(" ");

    divs = experience.map(function(e) {
        return "<div class=\"col-md-12 collapse\" id=\"sm-" + e.key + 
            "-collapse\"><h4 class=\"text-center\">" + e.company + 
            "</h4><br/><i><table class=\"text-center\"><tr><td>" + e.position +
            "</td></tr><tr><td>" + e.location +
            "</td></tr><tr><td>" + e.date +
            "</td></tr></table></i><hr/><div class=\"well\">" + e.description +
            "</div></div>";
    });

    var smallExperienceContainer = document.getElementById('sm-experience-container');
    smallExperienceContainer.innerHTML = divs.join(" ");
}

function expandExperience(key){
    for(let i=0;i<EXPERIENCE.length;i++){
        if(key!==EXPERIENCE[i].key){
            var thumb = document.getElementById(EXPERIENCE[i].key+"-thumb");
            thumb.className = thumb.className.replace("faded", "");
            var content = document.getElementById(EXPERIENCE[i].key+"-collapse");
            content.className = content.className.replace("in", "");
            var smallContent = document.getElementById("sm-" + EXPERIENCE[i].key+"-collapse");
            smallContent.className = smallContent.className.replace("in", "");
            
        } else {
            var thumb = document.getElementById(EXPERIENCE[i].key+"-thumb");
            thumb.className = thumb.className.includes("faded") ? thumb.className : thumb.className + " faded";
            var content = document.getElementById(EXPERIENCE[i].key+"-collapse");
            content.className = content.className.includes("in") ? content.className : content.className+" in";
            var smallContent = document.getElementById("sm-" + EXPERIENCE[i].key+"-collapse");
            smallContent.className = smallContent.className.includes("in") ? smallContent.className : smallContent.className+" in";
        }
    }
}

function filterProjects(small){
    var searchInput = document.getElementById(small ? 'sm-proj-search' : 'proj-search');
    searchKey = searchInput.value;
    var otherInput = document.getElementById(!small ? 'sm-proj-search' : 'proj-search');
    otherInput.value = searchKey;
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
    changeWells(EXPERIENCE);
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

    var tagOptions = TAGS.map(function(t) {
        var out = "<li class=\"keep-open\"><a href=\"#\"><input type=\"checkbox\" id=\"sm-" + t + "-check\" disabled ";
        if(selectedTags.includes(t) && !first){
            out += "checked";
        } 
        out += "/> " + t + " <span class=\"badge\">" + TAGS_COUNT[t] + "</span></a></li>";
        return out;
    });

    var projectsTagFilter = document.getElementById('sm-projects-tag-filter');
    projectsTagFilter.innerHTML = tagOptions.join(" ");
}