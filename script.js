// 1 - crie uma função que exiba uma mensagem no console

function exibirMensagem() {
    console.log("Mensagem exibida no console.");
    }
    exibirMensagem ();

 // 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

 function exibirNome(nome) {
    console.log("Meu nome é " + nome);
    }
    exibirNome("William");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function exibirInformacoes(nome, idade, estiloMusical) {
    console.log("Meu nome é " + nome + ", tenho " + idade + " anos e gosto de " + estiloMusical + ".");
    }
    exibirInformacoes("William", "24", "rosque");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function exibirFilmeMusica(filme, musica) {
    console.log("Meu filme favorito é " + filme + " e minha música favorita é " + musica + ".");
    }
    exibirFilmeMusica("Clube da luta", "Dirty Pool");


//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero) {
    return numero * 3;
    }
    console.log(triplo(5));

//6 - crie uma função que  verifique se uma  variável é true ou false

function verificarVariavel(variavel) {
    if (variavel === true) {
    console.log("A variável é true.");
    } else {
    console.log("A variável é false.");
    }
    }
    verificarVariavel(true);