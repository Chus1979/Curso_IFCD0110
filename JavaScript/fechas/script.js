
let dondeescribo = document.getElementById('main');
function comparaFechas(f1, f2){
    let fecha1 = new Date(f1);
    let fecha2 = new Date(f2);
    if(fecha1>fecha2){
        dondeescribo.innerHTML = "la fecha inicial es mayor que la final";
    }else if(f1<f2){
        dondeescribo.innerHTML = "la fecha final es mayor que la inicial";
    }else{
        dondeescribo.innerHTML = "la fecha debe ser valida y no pueden ser iguales";
    }
}
comparaFechas('6/11/2022','6-10-2022');