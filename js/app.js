//criado o array para armazenar os nomes, declarado fora das funçoes
let amigosParaSortear = [];

function adicionar() {
    //recuparado nome do amigo
    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    //recuperado p campo da lista de amigos
    let listaDeAmigos = document.getElementById('lista-amigos');
    //verificando se ja existe o mesmo nome dentro do array
    if(amigosParaSortear.includes(nomeDoAmigo)) {
        alert('Necessário colocar um nome diferente!');
        document.getElementById('nome-amigo').value = '';
        return;
    } 
    //verificando se o campo nome esta vazio
    if (nomeDoAmigo == '') {
        alert('Necessário colocar um nome!');
        //ao inves de usar o else abaixo, poderia ser usado nesta linha
        //o return; para encerrar a funçao
    }
    else {
        //adicionando o nome dos amigos no array atraves do push
        amigosParaSortear.push(nomeDoAmigo);
        //inserido o nome do amigo na lista
        if (listaDeAmigos.textContent == '') {
            listaDeAmigos.textContent = nomeDoAmigo;
        } else {
            listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + nomeDoAmigo;
        }
    }
    //limpado o campo nome do amigo
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    //passando a variavel que contem array para
    //a funçao embaralhar
    embaralha(amigosParaSortear);
    //recuperando o campo da lista de sorteio
    let listaDeSorteio = document.getElementById('lista-sorteio');
    //verificando se ha pelo menos 3 nomes para o sorteio
    if (amigosParaSortear.length < 3) {
        alert('Necessário pelo menos 3 nomes para fazer o sorteio!')
        //ao inves de usar o else abaixo, poderia ser usado nesta linha
        //o return; para encerrar a funçao
    } else {
        let i = 0;
        //imprimindo os nomes apos array embaralhada
        //enquanto indice menor que length do array
        while (i < amigosParaSortear.length) {
    
            //condicional para verificar se o i é igual ao comprimento do array menos 1
            if (i == amigosParaSortear.length - 1) {
                //se verdadeiro, o ultimo nome do sorteio pegara o primeiro nome (representado pela posiçao zero no array)
                listaDeSorteio.innerHTML = listaDeSorteio.innerHTML +
                amigosParaSortear[i] + ' --> ' + amigosParaSortear[0] + '<br>'; 
                //se falso, cada nome/posiçao deve "puxar" o proximo nome/posiçao (representado pelo i mais 1 no array)
            } else {
                listaDeSorteio.innerHTML = listaDeSorteio.innerHTML +
                amigosParaSortear[i] + ' --> ' + amigosParaSortear[i + 1] + '<br>'; 
                
        
            }
            i++;
        }
    }
 
} 


function reiniciar() {
    //limpado o array
    amigosParaSortear = [];
    //limpado o campo nome do amigo
    document.getElementById('nome-amigo').value = '';
    //limpado a lista de amigos
    document.getElementById('lista-amigos').textContent = '';
    //limpado a lista de sorteio
    document.getElementById('lista-sorteio').innerHTML = '';
}

//funçao de terceiros que faz o embaralhamento de arrays
//necessita de um parametro(neste caso, uma array)
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}