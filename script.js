function Restart(Matrix, RndArr) {
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
    matrix[Math.floor(random(matrixlengthY))][Math.floor(random(matrixlengthX))] = 4;
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
        }
    }
}
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
    frameRate(framerate);
    

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


let tesakner = [0,0,0,0,0,0,1,1,1,1.25,1.5,2,2,2,2,2, 3, 0,0];
let matrixlengthX = 50;
let matrixlengthY = 50;
let koxmX = 10;
let koxmY = 10;
let matrix = [];
let framerate=10;
let xotiguyn = 1;
for (var y = 0; y < matrixlengthY; y++) {
    matrix[y] = [];
    for (var x = 0; x < matrixlengthX; x++) {
        matrix[y][x] = 0;
    }
}
var grassArr = [];//1
var minivirusgrassArr = [];//1.25
var virusgrassArr = [];//1.5
var xotakerArr = [];//2 || //2.5

var gishatichArr = [];//3
var fermerArr = [];//4


let side = 10;
function setup() {
    frameRate(framerate);


    createCanvas(koxmX * matrixlengthX + 1, koxmY * matrixlengthY + 1);
    background('gray');
    Restart(matrix, tesakner);
}

function draw() {
    frameRate(framerate);



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (matrix[y][x] == 1) {
                xotiguyn++;
                xotiguyn=xotiguyn%2;
                if(xotiguyn == 0){
                    fill("green");
                }
                if(xotiguyn == 1){
                    fill("rgb(70,150,0)");
                }
                
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (matrix[y][x] == 1.25) {
                fill("#0cacac");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (matrix[y][x] == 1.5) {
                fill("aqua");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (matrix[y][x] == 2.5) {
                fill("yellow");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
                rect(x * koxmX, y * koxmY, koxmX, koxmY);
            }
        }
    }
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

}

