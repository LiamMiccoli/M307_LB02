

// Check required fields


function validationForm() {
    let mail = document.getElementById("mail").value;
    let text = document.getElementById("feedback");
    let pattern = /^\S+@\S+\.\S+$/;
    // /^[^ ]+@[^ ]+\.[a-z]{2-3}$/;
    let phone = document.getElementById("phone").value;
    let textphone = document.getElementById("feedback-phone");
    let patternPhone = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
    const fName = document.getElementById('fname');
    const lName = document.getElementById('lname');
    const msg = document.getElementById('message');
    let msgText = document.getElementById('feedback-txt');
    let smsRadio = document.getElementById('sms-radio');
    let emailRadio = document.getElementById('email-radio')

    // Validierung E-Mail:
    if (fName.value.trim() != '' && lName.value.trim() != '' && msg.value.trim() != '') {

        if (mail.match(pattern) && phone.match(patternPhone)) {
            // Validierung Radio Button
            if (emailRadio.checked === true) {
                alert("Your message was sent sucsesfuly. We will get back to you via E-Mail as soon as possible.")
                msgText.innerHTML = "<i class=\"fas fa-check check\"></i>Your message was sent succesfully.";
                msgText.classList.remove("invalid");
                msgText.classList.add("valid");
            } else if (smsRadio.checked === true) {
                alert("Your message was sent succesfully. We will get back to you via SMS as soon as possible.")
                msgText.innerHTML = "<i class=\"fas fa-check check\"></i>Your message was sent succesfully.";
                msgText.classList.remove("invalid");
                msgText.classList.add("valid");
            } else {
                alert("Please select your prefered communication channel.")
                msgText.innerHTML = "<i class=\"fas fa-times cross\"></i>Please select your prefered communication channel.";
                msgText.classList.remove("valid");
                msgText.classList.add("invalid");
            }
        }
        else{
            msgText.innerHTML = "<i class=\"fas fa-times cross\"></i>Please fill out the E-Mail and Phone Input correctly.";
            msgText.classList.remove("valid");
            msgText.classList.add("invalid");
        }

    } else {
        msgText.innerHTML = "<i class=\"fas fa-times cross\"></i>Please fill out the required inputs.";
        msgText.classList.remove("valid");
        msgText.classList.add("invalid");
    }

}

// Login
function loginCheck() {
    const pw = document.querySelector('input[name=password]');
    const login = document.getElementById('feedback-login')
    if (pw.value === "Admin" && mail.value === "liam@miccoli.com") {
        alert("You were succesfully logged in, you now can navigate the site as Admin.")
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 500);
        login.classList.add("valid");
        login.classList.remove("invalid");
        login.innerHTML = "<i class=\"fas fa-check check\"></i>Successful login";

    } else {
        login.classList.add("invalid");
        login.classList.remove("valid");
        login.innerHTML = "<i class=\"fas fa-times cross\"></i>Password or Email is wrong, try again.";
    }
}


