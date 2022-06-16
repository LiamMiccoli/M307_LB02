/*
Thema: Registration server
Einfacher Server, um Benutzer zu registrieren
Der Server dient zu Übung zur Validierung von Benutzereingaben im Backend.
 */

'use strict';

let express = require("express");
let bodyParser = require("body-parser");
let app     = express();
const { v4: uuidv4 } = require('uuid');
const UserRepository = require('./UserRepository');
const validateUser= require('./ValidationService');
const {validationForm} = require("./ValidationLib");


const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//Warning: Korrekt setzen!!
const staticPath = './server/data/';
const registrationFile = staticPath+'registration.json';


// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});


//test uuid
app.get('/test1', (req, res) => {
    const id = uuidv4();
    res.send(id);
});



// necessary for posting data
// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

/*  1. Writing to file
    https://stackabuse.com/reading-and-writing-json-files-with-node-js/
 */

app.post('/register', (req, res) => {

    const HTTP_STATUS_NO_ACCEPTABLE = 406;
    //Daten des Posts-Requests auslesen und zusätzlich eine User-id erzeugen


    let contactForm = {
        "id": uuidv4(),
        "fname": req.body.contactForm.fname,
        "lname": req.body.contactForm.lname,
        "mail": req.body.contactForm.mail,
        "phone": req.body.contactForm.phone,
        "message": req.body.contactForm.message,
        "smsRadio": req.body.contactForm.smsRadio,
        "mailRadio": req.body.contactForm.mailRadio,
        "pw": req.body.contactForm.pw
    }

    let result = validationForm(contactForm)
    if (result.isNotValid){
        res.status(HTTP_STATUS_NO_ACCEPTABLE).send(result.msg)
    }
    else{
        let userRepo = new UserRepository(registrationFile);
        userRepo.read()
            .then((data) => {
                //log data for analysis
                console.log(userObj);
                data.push(userObj);
                return data;
            })
            .then(data => userRepo.save(data))
            .catch(error => {
                console.error(error);
            });
        res.status(201).send(`User ${userObj.username} inserted!`);
    }

    let loginForm = {
        "id": uuidv4(),
        "pw": req.body.contactform.pw,
        "mail": req.body.contactform.pw,
    }

    let resultLogin = validateUser(loginForm)
    if (result.isNotValid){
        res.status(HTTP_STATUS_NO_ACCEPTABLE).send(result.msg)
    }
    else{
        let userRepo = new UserRepository(registrationFile);
        userRepo.read()
            .then((data) => {
                //log data for analysis
                console.log(userObj);
                data.push(userObj);
                return data;
            })
            .then(data => userRepo.save(data))
            .catch(error => {
                console.error(error);
            });
        res.status(201).send(`User ${userObj.username} inserted!`);
    }
});

