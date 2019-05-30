var posX1 = 0;
var posX2 = 0;

var n = 0;
var side = 200;
function setup() { 
      
    createCanvas(700, 950); 
    background(220, 141, 155);
    fill(255);
    textSize(40);
 
}

function main() {
    var socket = io();
    socket.on('CN', changeNumber);
    function changeNumber(number)
    {
        if(n==0)
        {
            n=number;
        }
        
    }
    function drawpannel(info)
    {
       // console.log(info);
        background(220, 141, 155);
        rect(info.PX1 - side/2 , 100, side, 10);
        rect(info.PX2 -side/2, height- 100, side, 10);
        ellipse(info.BX, info.BY, 55, 55);
        posX1 = info.PX1;
        posX2 = info.PX2;
        text(info.Score1 + "  |  " + info.Score2, (width / 2)-40, 50);

    }

    function Draw() {
        var cords =
           {
               MX : mouseX,
               N : n,
               posX1 : posX1,
               posX2 : posX2,

           };
        if (mouseIsPressed) {
           socket.emit("hold", cords);
        }
        socket.emit("ball", cords);
      }
      setInterval(Draw,1);

socket.on('draw pannel', drawpannel);
} // main closing bracket

window.onload = main;   