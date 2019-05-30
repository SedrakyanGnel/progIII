{var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var height = 950;
var width = 700;
var messages = [];
var playercount =0;
var ball = 
{
  x:width/2,
  y:height/2
}
var ballVelocity = 
{
  x:1,
  y:1
}
playerScore1=0;
playerScore2=0;




app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);
}
//express created

io.on('connection', function (socket) {
  playercount++;
  io.sockets.emit("CN", playercount);

  for(var i in messages) {
    io.sockets.emit("display sword", messages[i]);
  }
  socket.on("send cordinates", function (data) {
      messages.push(data);
      io.sockets.emit("display sword", data);
  });
  socket.on("ball", function (info) {
    ball.x+=ballVelocity.x;
    ball.y+=ballVelocity.y;
    if (ball.y > height || ball.y < 0)
    ballVelocity.y *= -1; // reverse y-velocity
    if (ball.x > width || ball.x < 0)
    ballVelocity.x *= -1; // reverse y-velocity

    //
  /* paddle collisions */
  if (ball.y <= 100 ) { // within range on the left side

    if (ball.y <= 50) { // out of bounds

      playerScore2++;
      //reset();
      ball.x=width/2;
      ball.y= height/2;
      ballVelocity.x *=-1;
      ballVelocity.y *=-1;
      return;
    }

    // check collision on left paddle
    if (ball.x > info.posX1-100 && ball.x < info.posX1 + 100) {

      if (/*ballVelocity.x < 0*/true) { // prevent the ball from getting stuck inside paddle

        ballVelocity.y *= -1;
        //ballVelocity.mult(random(1, 1.1));
      }
    }

  }else if (ball.y >= height - 100) { // right paddle

    if (ball.y >= height -50) { // out of bounds

      playerScore1++;
      ball.x=width/2;
      ball.y= height/2;
      ballVelocity.x *=-1;
      ballVelocity.y *=-1;
      return;
    }

    // check collision on right paddle
    if (ball.x > info.posX2-100 && ball.x < info.posX2 + 100) {

      if (/*ballVelocity.x < 0*/true) { // prevent the ball from getting stuck inside paddle

        ballVelocity.y *= -1;
        //ballVelocity.mult(random(1, 1.1));
      }
    }

  }
  
    //
    let obj =
    {
      PX1 : info.posX1,
      PX2 : info.posX2,
      BX : ball.x,
      BY : ball.y,
      Score1 : playerScore1,
      Score2 : playerScore2,


    } 
    io.sockets.emit("draw pannel", obj);
  });
  socket.on("hold", function (info) {

   if(info.N == 1)
   { 


    info.posX1 +=info.MX - info.posX1;


   }

   else if(info.N == 2)
   {
  
    
    info.posX2 +=info.MX - info.posX2;


   }
   
   let obj =
    {
      PX1 : info.posX1,
      PX2 : info.posX2,
      BX : ball.x,
      BY : ball.y,
      Score1 : playerScore1,
      Score2 : playerScore2,

    } 
    
   io.sockets.emit("draw pannel", obj);
});
socket.on('disconnect', function () {
playercount--;
  

});
});
