const validateLib = require('./ValidationLib');

function validateUser(userObj) {
    let result = validateLib.validationForm("fname", userObj.fname)
    if (result.isNotValid) {return result;}

    let result1 = validateLib.validationForm("lname", userObj.lname)
    if (result1.isNotValid) {return result;}

    let result2 = validateLib.validationForm("mail", userObj.mail)
    if (result2.isNotValid) {return result;}

    let result3 = validateLib.validationForm("phone", userObj.phone)
    if (result3.isNotValid) {return result;}

    let result4 = validateLib.validationForm("message", userObj.message)
    if (result4.isNotValid) {return result;}

    let result5 = validateLib.validationForm("smsRadio", userObj.smsRadio)
    if (result5.isNotValid) {return result;}

    let result6 = validateLib.validationForm("mailRadio", userObj.mailRadio)
    if (result6.isNotValid) {return result;}
}

module.exports = {
    validateUser
}