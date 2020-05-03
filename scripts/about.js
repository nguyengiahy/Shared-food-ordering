
"use strict";

function openContent(evnt, SubName){
    var i, content, sublinks;

    content = document.getElementsByClassName("content");
    for(i = 0; i < content.length; i++){
        content[i].style.display = "none";
    } 
    
    sublinks = document.getElementsByClassName("links");

    for(i = 0; i < sublinks.length; i++){
        sublinks[i].className = sublinks[i].className.replace("active", "");
    }

    document.getElementById(SubName).style.display = "block";
    evnt.currentTarget.className += " active";

    
}


