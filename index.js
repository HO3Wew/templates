const canvasPlot = document.getElementById('canvas_plot')
const ctx = canvasPlot.getContext('2d')

ctx.font = "20px Georgia";
ctx.strokeText("Hello World!", 10, 50);

ctx.font = "30px Verdana";

// Создаем градиент
var gradient = ctx.createLinearGradient(0, 0, 100, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

// Заполним градиентом
ctx.strokeStyle = gradient;
ctx.strokeText("Big smile!", 10, 90);

ctx.strokeStyle = '#ff0000'
ctx.moveTo(320, 300);
ctx.lineTo(420, 400);
ctx.stroke();
ctx.beginPath(); 
ctx.moveTo(300, 300);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = '#0000ff'
ctx.moveTo(320, 300);
ctx.lineTo(420, 400);
ctx.stroke();
ctx.beginPath(); 
ctx.fillText('текст', 300, 400);
ctx.fillRect(300, 400, 2, 2);
ctx.font = '30px Arial';
ctx.textAlign = 'left';
ctx.textBaseLine = 'top';

ctx.fillStyle = "yellow";
ctx.fillRect(0, 0, 250, 100)

ctx.transform(1, 0.5, -0.5, 1, 30, 10);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 250, 100);

ctx.transform(1, 0.5, -0.5, 1, 30, 10);
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 250, 100);
