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
    //recebe um array com todas as vogais encontradas na palavra, ou null caso não hajam vogais
    let vogais = palavra.match(/[aeiouàáéíóúâêôãõ]/gi);

    //retorna 0 caso 'vogais' seja nulo, senão, retorna o tamanho do array de vogais 
    return vogais == null ? 0 : vogais.length;
}