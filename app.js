// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numAleatorio = Math.random

function agregarAmigo (){
    let amigoHTML = document.getElementById('amigo');
    let nombreAmigo = amigoHTML.value;
    if(nombreAmigo === ''){
        alert('Favor de ingresar nombre de amigo.')
    }else{
        amigos.push(nombreAmigo);
        amigoHTML.value = '';
        alert(amigos);
        return;
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía.");
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo al azar
    let amigoAleatorio = amigos[indiceAleatorio];

    // Mostrar el nombre del amigo al azar
    alert("El amigo seleccionado al azar es: " + amigoAleatorio);
}

/*para escoger un num random para un índice, puedo hacer que ese índice sea random*/














