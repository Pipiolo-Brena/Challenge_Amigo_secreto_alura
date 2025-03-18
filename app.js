// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos=[];
let ganador;

function agregarAmigo(){
    let amigoAñadido = (document.getElementById('amigo').value);
    if(amigoAñadido!=""){
        nombresAmigos.push(amigoAñadido);
        verAmigoNuevo();
        limpiarCaja();
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

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}