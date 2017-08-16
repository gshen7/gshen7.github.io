var _currentActive = "landing";

function navTo(newActive){
    var oldPill = document.getElementById(_currentActive+"-pill");
    if(oldPill){
        oldPill.className="inactive";
    }
    var newPill = document.getElementById(newActive+"-pill");
    newPill.className="active";
    changeContent(newActive);
}

function changeContent(newActive){
    var oldContentDiv = document.getElementById("content-div-" + _currentActive);
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
    _currentActive=newActive;
}

function changeText(text, id){
    var display = document.getElementById('text-display');
    var selected = document.getElementById(id);
    var things = [document.getElementById('studying'), document.getElementById('engaging'), document.getElementById('exploring')];
    for (i = 0; i < things.length; i++) { 
        things[i].style.color="darkgrey";
    }
    display.innerHTML = text;

    selected.style.color="deepskyblue";
}