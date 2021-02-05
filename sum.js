const { number } = require("yargs");

function stringCalc(eingabe) {

    //Wenn der String leer ist, liefere leer zurück
    if (eingabe === '')
        return '';

    //Variablen
    let parts, number, result;
    let errText = '';

    // NUR AUFGABE A !!!
    // Zerlegen des Strings per RegEx-Split in Teilwörter
    // parts = eingabe.split(/,|\n/);
    //console.log(parts)

    // if (parts.length == 2) {
    //     return Number(parts[0]) + Number(parts[1]);
    // }
    // ENDE AUFGABE A !!!

    result = 0;
    //Aufgabe d: Alternatives Trennzeichen zulassen
    if (eingabe.length >= 4 && eingabe[0] === '/' && eingabe[1] === '/' && eingabe[3] === '\n') {
        var delim = eingabe[2];
        parts = eingabe.substring(4).split(delim);
    }
    else {
        // Zerlegen des Strings per RegEx-Split in Teilwörter
        parts = eingabe.split(/,|\n/);
    }

    //Teilwortfeld durchlaufen
    for (let i = 0; i < parts.length; ++i) {
        if (parts[i] != '') {
            // Ignorieren von mehrfach aufeinanderfolgenden Delimitern
            //Der String wird in Zahl konvertiert.
            number = Number(parts[i]);
            //Aufgabe e bei negativen Zahlen soll eine Exception geworfen werden
            if (Number(parts[i]) < 0) {
                if (errText == '')   // Erste negative Zahl des Fehlerstrings
                    errText = parts[i];
                else                // Weitere negative Zahlen
                    errText += ', ' + parts[i]
            }
            //Aufgabe f Zahlen größer 1000 ignorieren 
            else if (number <= 1000) {  // nur Zahlen<=1000 addieren
                result += number;
            }
        }
    }
    if (errText != '')    // Wurden negative Zahlen gefunden?
        throw ('negatives not allowed: ' + errText)

    return result;
}


module.exports =
{
    stringCalc
}