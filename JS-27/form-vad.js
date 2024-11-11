const voornaam = document.getElementById("voornaam");
const tv = document.getElementById("tv");
const achternaam = document.getElementById("achternaam");
const adres = document.getElementById("adres");
const postcode = document.getElementById("postcode");
const plaats = document.getElementById("plaats");

const telefoon = document.getElementById("telefoon");
const email = document.getElementById("email");
const geslacht = document.getElementById("geslacht");
const boyband = document.getElementById("boyband");
const geboortedatum = document.getElementById("geboorte");

let text = "";

function check() {

    if (!voornaam.value || !achternaam.value || !adres.value || !postcode.value || !plaats.value) {
        text = "";

        switch (true) {
            case (voornaam.value === ""): voornaam.style.backgroundColor = "red";
                text += "Voornaam is verplicht" + "<br>";
                break;
            case (voornaam.value !== ""): voornaam.style.backgroundColor = "green";
                break;

            case (achternaam.value === ""): achternaam.style.backgroundColor = "red";
                text += "Achternaam is verplicht" + "<br>";
                break;
            case (achternaam.value !== ""): achternaam.style.backgroundColor = "green";
                break;

            case (adres.value === ""): adres.style.backgroundColor = "red";
                text += "Adres is verplicht" + "<br>";
                break;
            case (adres.value !== ""): adres.style.backgroundColor = "green";
                break;

            case (postcode.value === ""): postcode.style.backgroundColor = "red";
                text += "Postcode is verplicht" + "<br>";
                break;
            case (postcode.value !== ""): postcode.style.backgroundColor = "green";
                break;
                
            case (plaats.value === ""): plaats.style.backgroundColor = "red";
                text += "Plaats is verplicht" + "<br>";
                break;
            case (plaats.value !== ""): plaats.style.backgroundColor = "green";
                break;
                default:;
        }

        document.getElementById("melding").innerHTML = text;
        document.getElementById("melding").style.color = "red";
    } else {
        text = "";
        text = "UW naam is: " + voornaam.value + " " + tv.value + " " + achternaam.value + "<br> Adres is: " + adres.value + "<br>Postcode: " + postcode.value + " En plaats: " + plaats.value + "<br>";

        if (telefoon.value) {
            text += "Jouw telefoonnummer is: " + telefoon.value + ".<br>";
        }
        if (email.value) {
            text += "Jouw email is: " + email.value + ".<br>";
        }
        if (boyband.value) {
            text += "Jouw favoriete boyband is: " + boyband.value + ".<br>";
        }
        if (geslacht.value) {
            text += "Jouw geslacht is: " + geslacht.value + ".<br>";
        }
        if (geboortedatum.value) {
            text += "Jouw geboortedatum is: " + geboortedatum.value + ".<br>";
        }

        document.getElementById("melding").innerHTML = text;

    }

}
