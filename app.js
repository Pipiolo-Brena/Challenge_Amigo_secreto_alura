// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos=[];
let ganador;

function agregarAmigo(){
    let amigoAñadido = (document.getElementById('amigo').value);
    nombresAmigos.push(amigoAñadido);
    verAmigoNuevo();
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}