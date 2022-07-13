var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 4;
ctx.strokeStyle = "#010453";

function dibujarAhorcado (vidas) {
    switch (vidas) {
        case 7:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dibujarHorca();
            break;
    
        case 6:
            dibujarCabeza();
            break;
        
        case 5:
            dibujarCuerpo();
            break;
        
        case 4:
            dibujarPiernaIzquierda();
            break;
            
        case 3:
            dibujarPiernaDerecha();
            break;

        case 2:
            dibujarBrazoIzquierda();
            break;

        case 1:
            dibujarBrazoDerecho();
            break;

        case 0:
            dibujarCara();
            break;
    
        default:
        break;
    }
}

function dibujarHorca() {
    ctx.beginPath();
    ctx.moveTo(10,310);
    ctx.lineTo(260,310);
    ctx.moveTo(60,310);
    ctx.lineTo(60,10);
    ctx.lineTo(210,10);
    ctx.lineTo(210,60);
    ctx.stroke();
}

function dibujarCabeza() {
    ctx.beginPath();
    ctx.arc(210,85,25,0,2*Math.PI);
    ctx.stroke();
}

function dibujarCuerpo() {
    ctx.beginPath();
    ctx.moveTo(210,110);
    ctx.lineTo(210,210);
    ctx.stroke();
}

function dibujarPiernaIzquierda() {
    ctx.beginPath();
    ctx.moveTo(210,210);
    ctx.lineTo(185,260);
    ctx.stroke();
}

function dibujarPiernaDerecha() {
    ctx.beginPath();
    ctx.moveTo(210,210);
    ctx.lineTo(235,260);
    ctx.stroke();
}

function dibujarBrazoIzquierda() {
    ctx.beginPath();
    ctx.moveTo(210,110);
    ctx.lineTo(185,160);
    ctx.stroke();
}

function dibujarBrazoDerecho() {
    ctx.beginPath();
    ctx.moveTo(210,110);
    ctx.lineTo(235,160);
    ctx.stroke();
}

function dibujarCara() {
    ctx.beginPath();
    ctx.moveTo(196,82);
    ctx.lineTo(207,72);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(213,82);
    ctx.lineTo(224,72);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(207,82);
    ctx.lineTo(196,72);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(224,82);
    ctx.lineTo(213,72);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(202,95);
    ctx.lineTo(218,95);
    ctx.stroke();
}

   

