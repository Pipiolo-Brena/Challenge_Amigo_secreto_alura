// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos=[];
let amigoSecreto;

function agregarAmigo(){
    let amigoAñadido = (document.getElementById('amigo').value);
    if(amigoAñadido!=""){
        if(isNaN(amigoAñadido)){
            nombresAmigos.push(amigoAñadido);
            verAmigoNuevo();
            limpiarCaja();
        }else alert("No se permiten numeros, ingresar un nombre.");
    }else{
        alert("Por favor, inserte un nombre.");
    }
}

function verAmigoNuevo(){
    let lista=document.querySelector("#listaAmigos");
    lista.innerHTML = ""
    for(let x of nombresAmigos){
        let nuevoElemento=document.createElement("li");
        nuevoElemento.textContent=x;
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo(){
    if(nombresAmigos.length>1){
        let numeroAzar=Math.floor(Math.random()*nombresAmigos.length);
        amigoSecreto= nombresAmigos[numeroAzar];

        //Quitamos la listas anteriores
        estadoInicial();

        //Ponemos el ganador en pantalla
        let listaResultado=document.querySelector("#resultado");
        let nuevoElemento=document.createElement("li");
        nuevoElemento.textContent=`El amigo sorteado es: ${amigoSecreto}`;
        listaResultado.appendChild(nuevoElemento);
    }else{
        alert("Amigos insuficientes para el sorteo, añadir más amigos.");
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function estadoInicial(){
    let listaAmgios=document.querySelector("#listaAmigos");
    listaAmgios.innerHTML = ""
    let listaResultado=document.querySelector("#resultado");
    listaResultado.innerHTML = ""
}