var conteudo = document.getElementById('conteudo');
var botao = document.getElementById('mostre_mais')

//criar o click do botão utilizando uma função anônima
botao.onclick = function (){

    if(conteudo.className == "open"){
        //encurtar caixa
        conteudo.className = ""; //mudar a classe da div do conteudo para " "
        botao.innerHTML = "Mostrar Mais"; //muda o texto do botão para mostrar mais
    }
    else{
    //expandir a caixa
    conteudo.className = "open"; //muda a classe da div conteudo para open
    botao.innerHTML = "Mostrar Menos"; //muda o texto do botão para mostrar menos
    }
};
