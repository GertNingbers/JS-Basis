document.getElementById("verzend").addEventListener("click", check);

const voornaam = document.getElementById("voornaam");
const tv = document.getElementById("tv");
const achternaam = document.getElementById("achternaam");
const adres = document.getElementById("adres");
const postcode = document.getElementById("postcode");
const plaats = document.getElementById("plaats");
const telefoon = document.getElementById("telefoon");
const email = document.getElementById("email");
const geboortedatum = document.getElementById("geboorte");
const boyband = document.getElementById("boyband");

let text = "";

function check(event) {
    event.preventDefault(); // Voorkomt dat pagina opnieuw wordt geladen.
    text = "";
    
    document.querySelectorAll(".verijst").forEach(element => element.style.backgroundColor = "lightgreen");


    // Controleert op verplichte velden.
    if (!voornaam.value || !achternaam.value || !adres.value || !postcode.value || !plaats.value) {
        if (!voornaam.value) {
            voornaam.style.backgroundColor = "red";
            text += "Voornaam is verplicht<br>";
        } 

        if (!achternaam.value) {
            achternaam.style.backgroundColor = "red";
            text += "Achternaam is verplicht<br>";
        }

        if (!adres.value) {
            adres.style.backgroundColor = "red";
            text += "Adres is verplicht<br>";
        }

        if (!postcode.value) {
            postcode.style.backgroundColor = "red";
            text += "Postcode is verplicht<br>";
        } 

        if (!plaats.value) {
            plaats.style.backgroundColor = "red";
            text += "Plaats is verplicht<br>";
        } 

        document.getElementById("melding").innerHTML = text;
        document.getElementById("melding").style.color = "red";
        
    } else {
        text = "Uw naam is: " + voornaam.value + " " + tv.value + " " + achternaam.value + "<br> Adres is: " + adres.value + "<br>Postcode: " + postcode.value + " " + plaats.value + "<br>";

        if (telefoon.value) {
            text += "Jouw telefoonnummer is: " + telefoon.value + ".<br>";
        }

        if (email.value) {
            text += "Jouw email is: " + email.value + ".<br>";
        }

        if (geboortedatum.value) {
            text += "Jouw geboortedatum is: " + geboortedatum.value + ".<br>";
        }

        if (boyband.value) {
            text += "Jouw favoriete boyband is: " + boyband.value + ".<br>";
        }

        const geslacht = document.querySelector('input[name="geslacht"]:checked');
        if (geslacht) {
            text += "Jouw geslacht is: " + geslacht.value + ".<br>";
        }

        document.getElementById("melding").innerHTML = text;
        document.getElementById("melding").style.color = "black";
    }
}

