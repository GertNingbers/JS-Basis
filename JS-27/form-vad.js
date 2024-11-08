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


function check() {
    const fields = [voornaam, achternaam, adres, postcode, plaats];

    fields.forEach(field => {
        if (field.value.trim() === "") {
            field.style.backgroundColor = "red"; 
        } else {
            field.style.backgroundColor = "green"; 
        }
    });
}

