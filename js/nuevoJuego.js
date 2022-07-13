var nuevoJuego=document.querySelector('#nuevoJuego');
var listaLetras=document.querySelector('#lista-letras');
var listaGuiones=document.querySelector('#lista-guiones');
var cantVidas=document.querySelector('#cant-vidas');
var listaErrores= document.querySelector('#lista-errores');
var vidas;

nuevoJuego.addEventListener('click',function(){
    nuevoJuego.blur();
    var indice= Math.round(Math.random()*((palabrasM.length)-1));
    var palabraElegida= palabrasM[indice];
    resetComienzo();        
    construirLi(palabraElegida);    
})

document.addEventListener('keypress',function(e){
    var letras = document.querySelectorAll('#lista-letras li');
    var caracter=e.key.toUpperCase();
    var contadorErrores=0;
    var val=validacionCaracteres(caracter); 
    if(val==true){
        dibujarAhorcado(vidas);
        verificadorWin();
        if(vidas==0){
            perdiste();
            return;
        }else{
            if(input.style.visibility == "visible"){
                return;
            }else{
                for (let i = 0; i < letras.length; i++) {
                        
                    if(letras[i].textContent==caracter){
                        letras[i].style.visibility='visible';
                    }else{
                            contadorErrores++;
                        if(contadorErrores==letras.length){
                            if(verificadorWin()!== true){
                                vidas=vidas-1;
                                cantVidas.innerHTML=vidas;
                                mostrarLetrasUtilizadas(caracter);
                            }
                        }
                    }
                }
            }        
        }if(vidas==0){
            dibujarAhorcado(vidas);
            perdiste();
            return;
        }else{verificadorWin();}
        dibujarAhorcado(vidas);
    }else{return;}   
})

function construirLi(elegida){
    var letras=elegida.split('');

    for (i =0; i < letras.length ; i++) {
        var liLetras=document.createElement('li');
        var liGuiones=document.createElement('li');
        liLetras.classList.add('letra');
        liGuiones.classList.add('guion');
        liGuiones.innerHTML="_"
        liLetras.innerHTML=letras[i];
        listaLetras.appendChild(liLetras);
        listaGuiones.appendChild(liGuiones);
    }

}

function resetComienzo(){
    listaLetras.innerHTML="";
    listaGuiones.innerHTML="";
    input.style.visibility='hidden';
    vidas=7;
    cantVidas.innerHTML=vidas
    document.querySelector('#vidas').style.visibility='visible';
    spanError.classList.add("invisible");
    listaErrores.innerHTML="";
    dibujarAhorcado(vidas);
}

