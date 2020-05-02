//Javascript controls handling of hiding and expanding the clickable review.

"use strict";

function openTab(tabName){
    
    var i, x;
    
    x = document.getElementsByClassName("containerTab");

    for( i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "block";
}

