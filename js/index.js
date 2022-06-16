const countdown = () => {
    //Ziel datum in Millisekunden
    const countDate = new Date('May 19, 2023 00:00:00').getTime();
    //Heutiges Datum in Millisekunden
    const now = new Date().getTime();
    //Unterschied zwischen ziel Datum & heutiges Datum (verbleibende zeit)
    const gap = countDate - now;
    // Milisekunden in Tage, Stunden, Minuten & Sekunden Umrechnen
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    //Ausrechnen (Math.floor = runden)
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    // Object Literal
    const timeTotal = {
        second: textSecond,
        minute: textMinute,
        hour: textHour,
        day: textDay
    };
    //HTML Ausgeben
    document.querySelector(".day").innerText = timeTotal.day;
    document.querySelector(".hour").innerText = timeTotal.hour;
    document.querySelector(".minute").innerText = timeTotal.minute;
    document.querySelector(".second").innerText = timeTotal.second;
};
// Jede Sekunde Aktualisieren
setInterval(countdown, 1000);
// Button Random Images
// JSON
const jsonData = {
    "lion1": "lion-1",
    "lion2": "lion-2",
    "lion3": "lion-3",
    "lion4": "lion-4",
    "lion5": "lion-5",
    "lion6": "lion-6",
}
imagebtn();

function imagebtn() {
    const values = Object.values(jsonData)
    const randomValue = values[parseInt(Math.random() * values.length)]
    document.getElementById("rndmimg").src = "img/" + randomValue + ".png"
    document.getElementById("rndmimg").alt = "lion-sanctuary-nft-" + randomValue
}

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    imagebtn();
});
