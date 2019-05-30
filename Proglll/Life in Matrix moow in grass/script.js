
function killgreen(Matrix, RndArr) {

    grassArr = [];
    for (var y = 0; y < Matrix.length; y++) {
        for (var x = 0; x < Matrix[y].length; x++) {
            if (matrix[y][x] == 1)
                matrix[y][x] = 0;
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var xot = new Grass(x, y);
                grassArr.push(xot);
            }

        }
    }
}
function Kill(Matrix) {
    virusgrassArr = [];
    minivirusgrassArr = [];
    for (var y = 0; y < Matrix.length; y++) {
        for (var x = 0; x < Matrix[y].length; x++) {
            if (matrix[y][x] == 1.25||matrix[y][x] == 1.5)
                matrix[y][x] = 0;
        }
    }
}
function frameRateing(){
    var rng=document.getElementById('FR');
    framerate=rng.value;
    framerate= parseFloat(framerate);
    console.log(framerate);
    //frameRate(framerate);
    sockets.emit("framerateing",framerate)
    

}
// ////////////////\\\\\\\\\\\\\\\\ \\
// ///!!!???||()[]{}[]()||???!!!\\\ \\
// ///!!!???||()[]{}[]()||???!!!\\\ \\
// ///!!!???||()[]{}[]()||???!!!\\\ \\
// ///!!!???||()[]{}[]()||???!!!\\\ \\
// \\\\\\\\\\\\\\\\//////////////// \\


// var matrix = [
//    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//    [0, 1, 0, 1, 3, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
//    [0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
//    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//    [2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//    [2, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
//    [1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
// ]


/*
var grassArr = [];//1
var minivirusgrassArr = [];//1.25
var virusgrassArr = [];//1.5
var xotakerArr = [];//2 || //2.5

var gishatichArr = [];//3
var fermerArr = [];//4
*/
let socket =io()
let koxmX = 10;
let koxmY = 10;
let side = 10;
let matrixlengthX = 25;
let matrixlengthY = 25;
let xotiguyn = 1;

function random (arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
    
}
function setup() {
    //frameRate(framerate);
    createCanvas(koxmX * matrixlengthX + 1, koxmY * matrixlengthY + 1);
    background('gray');
    // Restart(matrix, tesakner);
}
socket.on("send info",drawMatrix)

function drawMatrix(info) {
    if(info.season == "spring"){document.body.style.backgroundColor = "#99F9FF";}
    else if(info.season == "summer"){document.body.style.backgroundColor = "green";}
    else if(info.season == "autumn"){document.body.style.backgroundColor = "yellow";}
    else if(info.season == "winter"){document.body.style.backgroundColor = "white";}
    document.getElementById('season').innerHTML = info.season
    let  GrCount=document.getElementById('garssCount');
    GrCount.innerHTML = info.Grasscount.toString();
    let  GreatCount=document.getElementById('garssEaterCount');
    GreatCount.innerHTML = info.Grasseatercount.toString();
    let  GishCount=document.getElementById('gishatichCount');
    GishCount.innerHTML = info.GishatichCount.toString();
    let  VirCount=document.getElementById('virusCount');
    VirCount.innerHTML = info.VirusCount.toString();
    let  MVirCount=document.getElementById('MinivirusCount');
    MVirCount.innerHTML = info.MiniVirusCount.toString();
    


    for (var y = 0; y < info.matrix.length; y++) {
        for (var x = 0; x < info.matrix[y].length; x++) {


            if (info.matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (info.matrix[y][x] == 1) {
                if(info.season == "winter")
                {
                    fill("gwhite");
                }
                else 
                {
                    xotiguyn++;
                    xotiguyn=xotiguyn%2;
                    if(xotiguyn == 0){
                        fill("green");
                    }
                    if(xotiguyn == 1){
                        fill("rgb(70,150,0)");
                    }
                }
               
                
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (info.matrix[y][x] == 1.25) {
                fill("#0cacac");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (info.matrix[y][x] == 1.5) {
                fill("aqua");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (info.matrix[y][x] == 2) {
                fill("orange");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (info.matrix[y][x] == 2.5) {
                fill("yellow");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (info.matrix[y][x] == 3) {
                fill("red");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (info.matrix[y][x] == 4) {
                fill("#700700");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (info.matrix[y][x] == 5) {
                fill("#700060");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
        }
    }
    

}

