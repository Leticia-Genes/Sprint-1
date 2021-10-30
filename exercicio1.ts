//função chamada ao clicar no botão
function mostrarResultado() {
    //variável que recebe a palavra escrita via input
    let palavra: string = (<HTMLSelectElement>document.getElementById('palavra')).value;
    //variável que recebe o retorno da função com a quantidade de vogais
    let quant: number = contarVogais(palavra);
    //cria um parágrafo para mostrar a resposta
    document.body.innerHTML = `<p>Quantidade de vogais da palavra <strong>${palavra}</strong>: ${quant}</p>`;
}

//função que conta o número de vogais da palavra
function contarVogais(palavra: string) : number {
    let cont: number = 0;                   //contador

    for(let i=0; i<palavra.length; i++) {   //percorre todas as letras da palavra
        switch (palavra[i]) {               //verifica se a letra corrente corresponde a uma vogal
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                cont++;                     //em caso positivo, incrementa o contador
                break;                      //sai do laço switch
        }
    }
    return cont;                            //retorna o número total de vogais encontradas
}