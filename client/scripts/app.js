"use strict";
(function () {
    function Start() {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();
function scrollToElement(elementId) {
    console.log('Scrolling to' + elementId);
    let elmnt = document.getElementById(elementId);
    console.log(elmnt);
    elmnt.scrollIntoView(true);
}
//# sourceMappingURL=app.js.map