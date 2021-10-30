
//function contarVogaisParametro()
//function contarVogais() : Number {
function contarVogais(palavra: string = (<HTMLSelectElement>document.getElementById('palavra')).value) {
    let quant: number = 0;

    for(let i=0; i<palavra.length; i++) {
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
    document.body.innerHTML = `<p>A palavra ${palavra} possui ${quant} vogais</p>`
    console.log(quant);
    //return quant;
}

//console.log(quantasVogais())