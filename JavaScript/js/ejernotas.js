let notas;
notas = prompt('Escribe tu nota aquí');

if(Number(notas) == notas){
    if(notas<5){
        document.getElementById('main').innerHTML ='Lo siento tu nota es un Insuficiente';
        window.location.reload();
    }
    if(notas>=5 && notas <= 6){
        document.getElementById('main').innerHTML ='Tu nota es un Bien';
        window.location.reload();
    }
    if(notas > 6 && notas <= 8){
        document.getElementById('main').innerHTML ='Tu nota es un Notable';
        window.location.reload();
    }
    if(notas > 8 && notas >=10){
        document.getElementById('main').innerHTML ='Tu nota es un Sobresaliente';
        window.location.reload();
    }
}else{
    //Aviso de q no es un número 
    alert('Debes introducir un número');
    //Pedimos una recarga para poder hacerlo bien
    //window.location.reload();
};