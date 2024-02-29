const caixa1 = document.querySelector(".container__input");
const caixa2 = document.querySelector(".container__text");
//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"
//console.table(matrizEmbola);
function btnCriptar() {
    const textEncript = cripto(caixa1.value);
    caixa2.value = textEncript;
    caixa1.value = " ";
}
function cripto (letraMuda) {
    let matrizEmbola = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    letraMuda = letraMuda.toLowerCase();
    for(let i=0 ;i<matrizEmbola.length;i++) {
        if(letraMuda.includes(matrizEmbola[i][0])) {
            letraMuda = letraMuda.replaceAll(matrizEmbola[i][0], matrizEmbola[i][1]);
        }
    } return letraMuda;
}
function btnDesencript() {
    const textDesencript = desencript(caixa1.value);
    caixa2.value = textDesencript;
    caixa1.value = " ";
}
function desencript (stringDesencript) {
    let matrizEmbola = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencript = stringDesencript.toLowerCase();
    for(let i=0 ;i<matrizEmbola.length;i++) {
        if(stringDesencript.includes(matrizEmbola[i][1])) {
            stringDesencript = stringDesencript.replaceAll(matrizEmbola[i][1], matrizEmbola[i][0]);
        }
    } return stringDesencript;
}
/*function copia() {
    let textoCopiado = document.getElementById("tetto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}*/
