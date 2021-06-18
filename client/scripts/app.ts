//IIFE -- Immediately Invoked Function Expression
"use strict";

(function(){
    //Function to ask user for confirmation
    function confirmDelete(){
        $('a.delete').on('click', function(event){
            if(!confirm('Are you sure?')){
                event.preventDefault();
                location.href = '/business-contacts';
            }
        });
    }

    function Start():void {
        console.log("App Started");

        confirmDelete();
    }

    window.addEventListener("load", Start);
})();

//Work in Progress
function scrollToElement(elementId: string):void {
    console.log('Scrolling to' + elementId);
    let elmnt = document.getElementById(elementId);
    console.log(elmnt);
    elmnt.scrollIntoView(true);
}