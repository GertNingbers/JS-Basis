const naam = document.getElementById("naam");
const leeftijd = document.getElementById("leeftijd");
let text1 = "";
let text2 = "";
let output = "";



function blurt() {
    text1 = "";
    text1 += naam.value;
    if (text1.length > 10 || text1.length < 2) {

        text1 = "De Naam input moet minimaal 2 karakters en mag maximaal 10 karakters hebben.";
        document.getElementById("output").style.backgroundColor = "#ff9999";//rood maar lichter
        document.getElementById("span").innerHTML = "De code verijst NIET aan de voorwaarden.";
        document.getElementById("span").style.color =  "#810606";

    } else {

        console.log(text1);
        document.getElementById("span").innerHTML = "De code verijst WEL aan de voorwaarden.";
        document.getElementById("output").style.backgroundColor = "lightgreen";
        document.getElementById("span").style.color = "darkgreen";

    }
    zien()
}

function key() {
    text2 = "";
    text2 = leeftijd.value;
    text2 += "<br> input 2 lengte is: " + text2.length + " Karakters.";

    if (!leeftijd.value) {
        text2 = "";
    }
 zien()
}

function zien(){
    output = "";
    output += text1 + "<br><br>" + text2;
    document.getElementById("output").innerHTML = output;
}