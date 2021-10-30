//function contarVogaisParametro()
//function contarVogais() : Number {
function contarVogais(palavra) {
    if (palavra === void 0) { palavra = document.getElementById('palavra').value; }
    var quant = 0;
    for (var i = 0; i < palavra.length; i++) {
        switch (palavra[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                quant++;
                break;
        }
    }
    document.body.innerHTML = "<p>A palavra " + palavra + " possui " + quant + " vogais</p>";
    console.log(quant);
    //return quant;
}
//console.log(quantasVogais())
//# sourceMappingURL=exercicio1.js.map