//START HERE****
// Tab navigation code
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//This is the form validation script
 document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var errorMessage = '';

    if (!name) {
        errorMessage += 'Name is required.\n';
    }

    if (!email) {
        errorMessage += 'Email is required.\n';
    } else {
        // Basic email format validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage += 'Please enter a valid email address.\n';
        }
    }

    if (!message) {
        errorMessage += 'Message is required.\n';
    }

    if (errorMessage) {
        event.preventDefault(); // this will prevent form submission
        alert(errorMessage); // this will display an error message
    }
});
//END HERE****