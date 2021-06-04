//IIFE -- Immediately Invoked Function Expression
"use strict";

(function(){
    function Start():void {
        console.log("App Started");
    }

    window.addEventListener("load", Start);

    
})()

//Work in Progress
function scrollToElement(elementId: string):void {
    console.log('Scrolling to' + elementId);
    let elmnt = document.getElementById(elementId);
    console.log(elmnt);
    elmnt.scrollIntoView(true);
}