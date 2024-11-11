const XSDX1 = [
    { voornaam: "Gert", tv: "", achternaam: "Ningbers", klas: "XSDX1" },
    { voornaam: "Jan", tv: "Van De", achternaam: "Dam", klas: "XSDX1" },
    { voornaam: "Bob", tv: "", achternaam: "Steen", klas: "XSDX1" },
    { voornaam: "Dik", tv: "", achternaam: "Tron", klas: "XSDX1" },
    { voornaam: "Luuk", tv: "De", achternaam: "Jong", klas: "XSDX1" },
];
const XSDX2 = [
    { voornaam: "Geus", tv: "De", achternaam: "Vrij", klas: "XSDX2" },
    { voornaam: "Storm", tv: "De", achternaam: "Wit", klas: "XSDX2" },
    { voornaam: "Mark", tv: "", achternaam: "Sanders", klas: "XSDX2" },
    { voornaam: "Sander", tv: "", achternaam: "Bleek", klas: "XSDX2" },
    { voornaam: "Kuifje", tv: "The", achternaam: "Water", klas: "XSDX2" },
];

let tabel = "";


function klas1() {
    tabel = "<table><tr><td>Voornaam</td><td>Tv</td><td>Achternaam</td><td>Klas</td></tr>";

    for (let i = 0; i < XSDX1.length; i++) {
        tabel += "<tr><td>" + XSDX1[i].voornaam + "</td><td>" + XSDX1[i].tv + "</td><td>" + XSDX1[i].achternaam + "</td><td>" + XSDX1[i].klas + "</td></tr>";
    }
    tabel += "</table>";
    document.getElementById("output").innerHTML = tabel;
}

function klas2() {
    tabel = "<table><tr><td>Voornaam</td><td>Tv</td><td>Achternaam</td><td>Klas</td></tr>";

    for (let i = 0; i < XSDX2.length; i++) {
        tabel += "<tr><td>" + XSDX2[i].voornaam + "</td><td>" + XSDX2[i].tv + "</td><td>" + XSDX2[i].achternaam + "</td><td>" + XSDX2[i].klas + "</td></tr>";
    }
    tabel += "</table>";
    document.getElementById("output").innerHTML = tabel;
}