var canvas;
var ctx;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.msGetInputContext("2d");

    ctx.fillStyle = "yellow";
    ctx.fillRect(50,50,50,50);

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(0,0);
    ctx.lineTo(50,50);
    ctx.fill();
}