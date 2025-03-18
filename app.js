// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos=[];
let ganador;

function agregarAmigo(){
    let amigoAñadido = (document.getElementById('amigo').value);
    if(amigoAñadido!=""){
        nombresAmigos.push(amigoAñadido);
        verAmigoNuevo(amigoAñadido);
        limpiarCaja();
    }else{
        alert("Ingresa algun nombre valido");
    }
}

function verAmigoNuevo(amigoAñadido){
    let lista=document.querySelector("#listaAmigos");
    let nuevoElemento=document.createElement("li");
    nuevoElemento.textContent=amigoAñadido;
    lista.appendChild(nuevoElemento);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}