let getal = document.getElementById("getal")
let begingetal = document.getElementById("startgetal")
let eindgetal = document.getElementById("eindgetal")

let antwoord = "";

function reken() {
    //parseint omdat de value niet direct als getal wordt gezien.
    const begin = parseInt(begingetal.value);
    const eind = parseInt(eindgetal.value);
    const getal1 = parseInt(getal.value);
    antwoord = "";

    //de if checked of getal value heeft.
    if (getal1) {
        for (let i = begin; i <= eind; i++) {
            antwoord += i + " x " + getal1 + " = " + (getal1 * i) + "<br>";
        }
        document.getElementById("display").innerHTML = antwoord;
        document.getElementById("wisknop").innerHTML = "<button onclick='wissen()'>Wissen</button>";
    }
}
function focus1() {
    document.getElementById("getal").focus();
}

//wisknop op klik door de fucus1() curser op invoerveld.
function wissen() {
    document.getElementById("display").innerHTML = "Voer een getal in";
    document.getElementById("wisknop").innerHTML = "";
    document.getElementById("getal").innerHTML = getal.value = "";
    document.getElementById("getal").onclick = focus1();
}
