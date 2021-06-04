//IIFE -- Immediately Invoked Function Expression
"use strict";

(function(){
    function Start():void {
        console.log("App Started");
    }

    window.addEventListener("load", Start);

    
})()

function scrollToElement(elementId: string):void {
    console.log('Scrolling to' + elementId)
    var elmnt = document.getElementById(elementId);
    elmnt.scrollIntoView();
}