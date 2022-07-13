function validacionCaracteres(e){
    var array=e.split("");
    var mapeo= array.map(function(e){
        if(e.charCodeAt() <= 90 && e.charCodeAt() >= 65 || e.charCodeAt() == 165){
            return true;
        }else{
            return false;
        }
    })
    var val=mapeo.includes(false);
    return !val;
}

function mostrarLetrasUtilizadas(c){
    var listaErrores= document.querySelectorAll('#lista-errores li');
    
    if(listaErrores.length==0){
        var ulErrores=document.querySelector('#lista-errores');
        var liErrores=document.createElement('li')
        liErrores.textContent=c;
        liErrores.classList.add('errores');
        ulErrores.appendChild(liErrores);
            
    }else{
        var contadorLetras=0;
        for (let i = 0; i < listaErrores.length; i++) {
                
            if(listaErrores[i].textContent != c){
                contadorLetras++;

                if(contadorLetras==listaErrores.length){
                    var ulErrores=document.querySelector('#lista-errores');
                    var liErrores=document.createElement('li')
                    liErrores.textContent=c;
                    liErrores.classList.add('errores');
                    ulErrores.appendChild(liErrores);
                }
            }else{
                vidas=vidas+1;
                cantVidas.innerHTML=vidas;
            }           
        }
    }
}

function verificadorWin(){
    var letras = document.querySelectorAll('#lista-letras li');
    var contador=0;
       
    for (let i = 0; i < letras.length; i++) {
        if(letras[i].style.visibility=='visible'){
            contador++;
        }            
    }
    if(contador==letras.length && letras.length!==0){
        ganaste();
        return true;
    }   
    
        
}
