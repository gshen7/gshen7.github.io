const tags = ["red", "orange", "yellow", "green", "blue"];
const projects = [
    {
        id: 0,
        title: "0",
        tags: [tags[0], tags[1]],
        description: "zero",
    },
    {
        id: 1,
        title: "1",
        tags: [tags[2], tags[3]],
        description: "one",
    },
    {
        id: 2,
        title: "2",
        tags: [tags[4], tags[0]],
        description: "two",
    },
    {
        id: 3,
        title: "3",
        tags: [tags[1], tags[2]],
        description: "three",
    },
    {
        id: 4,
        title: "4",
        tags: [tags[3], tags[4]],
        description: "four",
    },
    {
        id: 5,
        title: "5",
        tags: [tags[0], tags[1]],
        description: "five",
    },
    {
        id: 6,
        title: "6",
        tags: [tags[2], tags[3]],
        description: "six",
    },
    {
        id: 7,
        title: "7",
        tags: [tags[4], tags[0]],
        description: "seven",
    },
    {
        id: 8,
        title: "8",
        tags: [tags[1], tags[2]],
        description: "eight",
    },
    {
        id: 9,
        title: "9",
        tags: [tags[3], tags[4]],
        description: "nine",
    }
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
        return p.title.includes(searchKey);
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
        out += "/> " + t + "</a></li>";
        return out;
    });

    var projectsTagFilter = document.getElementById('projects-tag-filter');
    projectsTagFilter.innerHTML = tagOptions.join(" ");
}