var iFrase = "Hello World";

var frase = iFrase.toLowerCase();

var vogal = "aeiou";
var consoante = "bcdfghjklmnpqrstvxywz";

var vCount = 0;
var cCount = 0;

for(var t = 0; t <frase.length; t++) {

    for(var v = 0; v <vogal.length; v++) {
        if(frase[t] == vogal[v]) {
            vCount++
        } 
    }

    for(var c = 0; c <consoante.length; c++) {
        if(frase[t] == consoante[c]) {
            cCount++
        }
    }

}


console.log(`Tem ${vCount} vogais na frase ${iFrase}`);
console.log(`Tem ${cCount} consantes na frase ${iFrase}`);