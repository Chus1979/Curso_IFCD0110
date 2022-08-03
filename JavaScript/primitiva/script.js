function generar(){
    let num = [];
    for(let i= 1; i<50; i++){
        num.push(i);
    }
    for(let i=0; i<6; i++){
        let posicion = Math.floor(Math.random()*num.length);
        let premiado = num[posicion];
        let premiados = premiados.push(premiado);
        num.splice(posicion,1);
    }
    premiados.sort(function(a,b){return a-b;});
    document.write(premiados.toString());
}
generar(premiados);