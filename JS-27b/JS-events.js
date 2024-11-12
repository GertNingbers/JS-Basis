const naam = document.getElementById("naam");
const vrijtext = document.getElementById("leeftijd");

let text1 = "";
let text2 = "";
let output = "";



function blurt() {
    const min = Number(document.getElementById("min").value);
    const max = Number(document.getElementById("max").value);

    text1 = "";
    text1 += naam.value;
    if (text1.length > max || text1.length < min) {

        text1 = "De Naam input moet minimaal " + min + " karakters en mag maximaal " + max + " karakters hebben.";
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
    text2 = vrijtext.value;
    text2 += "<br><br> input 2 lengte is: " + text2.length + " Karakters.";

    if (!vrijtext.value) {
        text2 = "";
    }
 zien()
}

function zien(){
    output = "";
    output += text1 + "<br><br>" + text2;
    document.getElementById("output").innerHTML = output;
    
}
