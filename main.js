canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(350,200,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(500,200,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(275,250,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(425,250,50,0,2*Math.PI);
ctx.stroke();