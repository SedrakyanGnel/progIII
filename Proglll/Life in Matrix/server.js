grassArr = [];
minivirusgrassArr = [];
virusgrassArr = [];
xotakerArr = [];
gishatichArr = [];
fermerArr = [];
witchArr = [];
MulSpeed = 10;
let days = 0;
let tesakner = [0,0,0,0,0,0,1,1,1,1.25,1.5,2,2,2,2,2, 3, 0,0];
let matrixlengthX = 25;
let matrixlengthY = 25;

let framerate = 100;

 matrix = [];
for (var y = 0; y < matrixlengthY; y++) {
    matrix[y] = [];
    for (var x = 0; x < matrixlengthX; x++) {
        matrix[y][x] = random(tesakner);
    }
}
let Grass = require("./modules/class_Grass.js");
let Xotaker = require("./modules/class_Xotaker.js");
let Gishatich = require("./modules/class_Gishatich.js");
let VirusGrass = require("./modules/class_VirusGrass.js");
let MiniVirusGrass = require("./modules/class_MiniVirusGrass.js");
let Fermer = require("./modules/class_Fermer.js");
let Witch = require("./modules/class_Witch.js");

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);
//server end
//
//

let info =
{
    "matrix":0,
    "Grasscount":0,
    "Grasseatercount":0,
    "GishatichCount":0,
    "VirusCount":0,
    "MiniVirusCount":0,
    "season" : "spring", 
}

function random (arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
    
}


function Restart(Matrix, RndArr,LX,LY) {
    grassArr = [];
    minivirusgrassArr = [];
    virusgrassArr = [];
    xotakerArr = [];
    gishatichArr = [];
    fermerArr = [];
    for (var y = 0; y < Matrix.length; y++) {
        for (var x = 0; x < Matrix[y].length; x++) {
            matrix[y][x] = random(RndArr);
        }
    }
    //let xx= Math.floor(Math.random(LX));
    //let yy= Math.floor(Math.random(LY));
    Matrix[Math.floor(Math.random(LY))][Math.floor(Math.random(LX))] = 4;
    Matrix[5][5] = 5;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var xot = new Grass(x, y);
                grassArr.push(xot);
            }
            else if (matrix[y][x] == 1.5) {
                var virusxot = new VirusGrass(x, y);
                virusgrassArr.push(virusxot);
            }
            else if (matrix[y][x] == 2) {
                var xotaker = new Xotaker(x, y);
                xotakerArr.push(xotaker);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                var fermer = new Fermer(x, y);
                fermerArr.push(fermer);
            }
            else if (matrix[y][x] == 5) {
                var witch = new Witch(x, y);
                witchArr.push(witch);
            }
        }
    }
}

Restart(matrix,tesakner,matrixlengthX,matrixlengthY);

// for (var y = 0; y < matrix.length; y++) {
//     for (var x = 0; x < matrix[y].length; x++) {
//         if (matrix[y][x] == 1) {
//             var xot = new Grass(x, y);
//             grassArr.push(xot);
//             console.log(1);
//         }
//         else if (matrix[y][x] == 1.5) {
//             var virusxot = new VirusGrass(x, y);
//             virusgrassArr.push(virusxot);
//             console.log(1.5);
//         }
//         else if (matrix[y][x] == 2) {
//             var xotaker = new Xotaker(x, y);
//             xotakerArr.push(xotaker);
//             console.log(2);
//         }
//         else if (matrix[y][x] == 3) {
//             var gishatich = new Gishatich(x, y);
//             gishatichArr.push(gishatich);
//             console.log(3);
//         }
//         else if (matrix[y][x] == 4) {
//             var fermer = new Fermer(x, y);
//             fermerArr.push(fermer);
//             console.log(4);
//         }
//     }
// }

function game() {
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in virusgrassArr) {
        virusgrassArr[i].mul();
    }
    for (let i in minivirusgrassArr) {
        minivirusgrassArr[i].mul();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
        
    }
    for (var i = 0; i < fermerArr.length; i++) {
        fermerArr[i].bujel(i);
        fermerArr[i].sharjvel();
        fermerArr[i].Havasarakshrel ();
    }
    for (var i = 0; i < witchArr.length; i++) {
        witchArr[i].varaqel(i);
        witchArr[i].sharjvel();
    }
    
    info.matrix=matrix;
    info.Grasscount =grassArr.length;
    info.Grasseatercount = xotakerArr.length;
    info.GishatichCount = gishatichArr.length;
    info.VirusCount = virusgrassArr.length;
    info.MiniVirusCount = minivirusgrassArr.length;


    days++;
    if(days<=100){info.season = "spring";MulSpeed = 1;}
    else if(days>100&&days<=200){info.season = "summer";MulSpeed = 2;}
    else if(days>200&&days<=300){info.season = "autumn";MulSpeed = 0.5;}
    else if(days>300&&days<=400){info.season = "winter"; MulSpeed =0;}
    else if(days>400){days = 0;}
    io.sockets.emit("send info",info)
}
// function framerateings(frame)
// {
//     Framerate=frame;
//     console.log("framerates");
// }
// socket.on("framerateing",framerateings)

setInterval(game,framerate)