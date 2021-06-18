//IIFE -- Immediately Invoked Function Expression
"use strict";

(function(){
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form: any) {
      form.addEventListener('submit', function (event: any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    });

    //Function to ask user for confirmation
    function confirmAction(){
        $('a.confirm').on('click', function(event){
            if(!confirm('Are you sure?')){
                event.preventDefault();
                location.href = '/business-contacts';
            }
        });
    }

    function Start():void {
        console.log("App Started");

        confirmAction();
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