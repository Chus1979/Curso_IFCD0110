//función para llamar a los botones de navegación y el pie de pág.
//Con ella conseguimos que se pueda modificar uno u otro fichero y aparezca en el resto sin tener q ir uno a uno
//son peticiones para esperar una promesa
async function inserta(){
    //La interfaz Fetch API permite que el navegador web realice solicitudes HTTP a los servidores web
    //Con await esperamos la respuesta antes de lanzar la funcion, ade+ tiene q ser siempre una función asincrona
    //debemos esperar la respuesta antes de realizar la función

    let header = await fetch('header.html');
    let elhtml = await header.text(); //para q se vea en forma de txt.
    document.getElementById('header').innerHTML = elhtml;
    let footer = await fetch('footer.html');
    let elfooter = await footer.text();
    document.getElementById('footer').innerHTML = elfooter;
}
window.onload = function(){
    inserta();
}
//Cuenta atras:
// Seleccionamos la fecha limite 
// para el año vamos a crear una variable y para la edad otra.
// Así hacemos que sea un contador perpetuo
var edad = 24;
var year = 2023;
var countDownDate = new Date(`Jan 10, ${year} 00:00:00`).getTime();
//esta función es para que no sea visible el retaraso
//Se ejecuta 1º esta función y después la de interval
function ejecutar(){
    var now = new Date().getTime();

    // Calculamos la diferencia
    var distance = countDownDate - now;

    // Pasamos la diferencia a días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // insertamos el resultado en el html del id="contador"
    document.getElementById("contador").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("aniversario").innerHTML = `Cuenta atrás para los ${edad} años`;

    // Al acabar la cuenta atrás se escribe un texto
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "A volver a empezar";
        countDownDate = new Date(`Jan 10, ${year + 1} 00:00:00`).getTime();
        edad = edad + 1;
    }
}
// Actualizamos cada segundo el contenido
var x = setInterval(function () {
    ejecutar();
}, 1000);
ejecutar();
