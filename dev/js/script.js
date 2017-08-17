const experienceKeys = ["magnet", "cbs", "uwo"];
const tags = [
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
const tagsCount = {
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
const projects = [
    {
        id: 0,
        title: "IOU",
        tags: [tags[0], tags[2], tags[6]],
        description: "[In Progress] A web application simplifying the process for collecting money from friends using the PayPal API.",
    },
    {
        id: 1,
        title: "NHL Prediction Model",
        tags: [tags[4], tags[8]],
        description: "A model for predicting various aspects of NHL games. Used the perceptron machine learning algorithm to create a model to predict which teams will make the playoffs based on input factors of various season stats. Also created regression models for (A) evaluating players based on a single number metric, aggregating contributions on a game by game basis; and (B) predicting fantasy hockey points based on recent stats.",
    },
    {
        id: 2,
        title: "Group Tools Chatbot",
        tags: [tags[0]],
        description: "A Facebook messenger chatbot to add several tools for group chats. Tools were a gold star tracker, list randomizer and selector, and reaction picture library.",
    },
    {
        id: 3,
        title: "Support and Resistance Line Generator",
        tags: [tags[4]],
        description: "A platform to determine and plot support and resistance lines based on stock charts.",
    },
    {
        id: 4,
        title: "BikeSafe for V2V",
        tags: [tags[1], tags[3]],
        description: "A smartwatch app to detect cyclists' hand signals.",
    },
    {
        id: 5,
        title: "Indoor Locationing App",
        tags: [tags[1], tags[3]],
        description: "A novel indoor locationing technique based on a self-developed WiFi signal strength propagation based model.",
    },
    {
        id: 6,
        title: "Activity Tracking App",
        tags: [tags[1], tags[3], tags[5], tags[8]],
        description: "A machine learning based app to track physical activities throughout the day. Could distinguish between walking, running, stairs, and sitting.",
    },
    {
        id: 7,
        title: "Smart Bed Monitoring System",
        tags: [tags[1], tags[8]],
        description: "A machine learning based system for detecting bed-related scenarios and monitoring sleep patterns using simple, non-intrusive piezoelectric force sensors.",
    },
    {
        id: 8,
        title: "RFID Object Locator",
        tags: [tags[1], tags[7]],
        description: "A system for locating tagged items.",
    },
]

var currentActive = "home";
var selectedTags = tags;

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
    var newContentPanel = document.getElementById("content-panel-"+newActive);
    currentActive=newActive;
}

function changeText(text, id){
    var display = document.getElementById(id);
    display.innerHTML = text;
}

function filterProjects(){
    var searchInput = document.getElementById('proj-search');
    var searchKey = searchInput.value;
    
    var filteredProjects = projects.filter(function(p){
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
    for(let i=0;i<tags.length;i++){
        var tagCheck = document.getElementById(tags[i]+"-check");
        if(tagCheck.checked){
            selectedTags.push(tags[i]);
        }
    }
    updateTagsFilter();
    filterProjects();
}

function expandExperience(key){
    for(let i=0;i<experienceKeys.length;i++){
        if(key!==experienceKeys[i]){
            var thumb = document.getElementById(experienceKeys[i]+"-thumb");
            thumb.className = thumb.className.replace("faded", "");
            var content = document.getElementById(experienceKeys[i]+"-collapse");
            content.className = content.className.replace("in", "");
        } else {
            var thumb = document.getElementById(experienceKeys[i]+"-thumb");
            thumb.className = thumb.className.includes("faded") ? thumb.className : thumb.className + " faded";
            var content = document.getElementById(experienceKeys[i]+"-collapse");
            content.className = content.className.includes("in") ? content.className : content.className+" in";
        }
    }
}

function init(){
    changePanels(projects);
    updateTagsFilter();
    filterProjects();
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

function updateTagsFilter(){
    var tagOptions = tags.map(function(t) {
        var out = "<li><a href=\"#\"><input type=\"checkbox\" id=\"" + t + "-check\" onclick=\"changeSelectedTags()\" ";
        if(selectedTags.includes(t)){
            out += "checked";
        } 
        out += "/> " + t + " <span class=\"badge\">" + tagsCount[t] + "</span></a></li>";
        return out;
    });

    var projectsTagFilter = document.getElementById('projects-tag-filter');
    projectsTagFilter.innerHTML = tagOptions.join(" ");
}