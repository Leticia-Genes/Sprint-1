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
    var cont = 0; //contador
    for (var i = 0; i < palavra.length; i++) { //percorre todas as letras da palavra
        switch (palavra[i]) { //verifica se a letra corrente corresponde a uma vogal
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                cont++; //em caso positivo, incrementa o contador
                break; //sai do laço switch
        }
    }
    return cont; //retorna o número total de vogais encontradas
}
//# sourceMappingURL=exercicio1.js.map