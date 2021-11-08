//função chamada ao clicar no botão
function mostrarResultado() {
    //variável que recebe a palavra escrita via input
    var palavra = document.getElementById('palavra').value;
    //variável que recebe o retorno da função com a quantidade de vogais
    var quant = contarVogais(palavra);
    //cria um parágrafo para mostrar a resposta
    document.body.innerHTML = "<p>Quantidade de vogais da palavra <strong>" + palavra + "</strong>: " + quant + "</p>";
}
//função que conta o número de vogais da palavra
function contarVogais(palavra) {
    //recebe um array com todas as vogais encontradas na palavra, ou null caso não hajam vogais
    var vogais = palavra.match(/[aeiouàáéíóúâêôãõ]/gi);
    //retorna 0 caso 'vogais' seja nulo, senão, retorna o tamanho do array de vogais 
    return vogais == null ? 0 : vogais.length;
}
//# sourceMappingURL=exercicio1.js.map