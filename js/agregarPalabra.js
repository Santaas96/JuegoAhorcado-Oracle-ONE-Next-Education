var palabras=["televisor","parque","cargador", "yerba","fuego","bolsa","filtro","cable","enchufe","ferrari"];
var palabrasM=[];
var input=document.querySelector("#input-agregar-palabra");
var agregarPalabra=document.querySelector('#agregarPalabra');
var spanError=document.querySelector('#error-ing');


palabras.forEach(function(e) {
    palabrasM.push(e.toUpperCase());
});

agregarPalabra.addEventListener("click",function(){
    var entrada=input.value.toUpperCase();
    
    if(input.value==""){
        input.style.visibility='visible';
    }
    if(input.value!=="" && input.value.length <= 10){   
        var val=validacionCaracteres(entrada); 
        if(val==true){
            spanError.classList.add("invisible");
            palabrasM.push(entrada);
            input.style.visibility='hidden';
            input.value="";
            

        }else{
            spanError.classList.remove("invisible");
            return;
        }              
    }
})

