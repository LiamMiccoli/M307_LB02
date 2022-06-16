// Show input error message
function showError(id, message) {
    return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
    return `${id} successfully validate!`;
}

function validationForm(contactForm) {
    let patternMail = /^\S+@\S+\.\S+$/;
    let patternPhone = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;

    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showError(id, 'Error')
    }
    // Validierung E-Mail:
    if (contactForm.mail.match(patternMail) && contactForm.phone.match(patternPhone) && contactForm.fName.value.trim() !== '' && contactForm.lName.value.trim() !== '' && contactForm.msg.value.trim() !== '') {

        // Validierung Radio Button
        if (emailRadio.checked === true) {
            result = {
                isNotValid: false,
                msg: showSuccess(id)
            }
        } else if (smsRadio.checked === true) {
            result = {
                isNotValid: false,
                msg: showSuccess(id)
            }
        }

 return result;
    }

}



// Login
function loginCheck() {

    if (contactForm.pw.value === "Admin" && mail.value === "liam@miccoli.com") {

    } else {
 }
}
module.exports = {
    validationForm
}

