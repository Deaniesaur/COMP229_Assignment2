"use strict";
(function () {
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    function confirmAction() {
        $('a.confirm').on('click', function (event) {
            if (!confirm('Are you sure?')) {
                event.preventDefault();
                location.href = '/business-contacts';
            }
        });
    }
    function Start() {
        console.log("App Started");
        confirmAction();
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