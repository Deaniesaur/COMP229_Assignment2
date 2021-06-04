"use strict";
(function () {
    function Start() {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();
function scrollToElement(elementId) {
    console.log('Scrolling to' + elementId);
    var elmnt = document.getElementById(elementId);
    elmnt.scrollIntoView();
}
//# sourceMappingURL=app.js.map