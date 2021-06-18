"use strict";
(function () {
    function confirmDelete() {
        $('a.delete').on('click', function (event) {
            if (!confirm('Are you sure?')) {
                event.preventDefault();
                location.href = '/business-contacts';
            }
        });
    }
    function Start() {
        console.log("App Started");
        confirmDelete();
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