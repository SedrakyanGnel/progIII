var LivingCreature = require("./class_LivingCreature.js")
let Grass = require("./class_Grass.js");
let Xotaker = require("./class_Xotaker.js");
let Gishatich = require("./class_Gishatich.js");
//let VirusGrass = require("./class_VirusGrass.js");
let MiniVirusGrass = require("./class_MiniVirusGrass.js");
//let Fermer = require("./class_Fermer.js");

function random (arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
    
}
module.exports = class Fermer extends LivingCreature
{
    constructor(x,y)
    {
        super(x, y);
        //this.InGrass=false;
        this.MinGrass=0;
        this.MinXotaker=0;
        this.MinGishatich=2;
    }
	newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
			[this.x-2, this.y ],
			[this.x-2, this.y + 1],
			[this.x-2, this.y -1],
			[this.x-2, this.y  - 2],
			[this.x-2, this.y  + 2],
			[this.x-1, this.y  + 2],
			[this.x, this.y  + 2],
			[this.x+1, this.y  + 2],
			[this.x+2, this.y  + 2],
			[this.x+2, this.y  - 1],
			[this.x+2, this.y ],
			[this.x+2, this.y  +1],
			[this.x+2, this.y ],
			[this.x+2, this.y - 1],
			[this.x+2, this.y - 2],
			[this.x+1, this.y - 2],
			[this.x, this.y - 2],
			[this.x-1, this.y - 2]
        ];
    }

    chooseCell(ch)
    {
		 this.newDirections();
         return super.chooseCell(ch);
    }
    sharjvel()
    {
		
        let newCell=random(this.chooseCell(0));
        if(newCell)
        {
			
            let x = newCell[0];
            let y = newCell[1];
			//console.log(this.y,this.x);
			
			
            matrix[y][x]=4;
            // if(this.InGrass){
            //     matrix [this.y][this.x] = 1;
            //     }
            //     else{
            //         matrix [this.y][this.x] = 0;
            //     }
            matrix [this.y][this.x] = 0;//jnjel
			this.y=y;
            this.x=x;
            //this.InGrass=false;
        }
        
    }
    bujel()
    {
        this.multiply++;
        let virusCell=this.chooseCell(1.5);
        if(this.multiply>=2 && virusCell)
        {
			for (let j in virusCell)
			{
            let x = virusCell[j][0];
            let y = virusCell[j][1];
            matrix[y][x]=1.25;
            let newminivirusgrass=new MiniVirusGrass (x,y);
            minivirusgrassArr.push(newminivirusgrass);
            this.multiply=0;
                for (var i in virusgrassArr) {
                    if (x == virusgrassArr[i].x && y == virusgrassArr[i].y) {
                    virusgrassArr.splice(i, 1);
                    break;
                    }
                }
			}
        }
		//else
		//{
			virusCell=this.chooseCell(1.25);
		//}
		if(/*this.multiply>=2 &&*/ virusCell)
        {
			for (let j in virusCell)
			{
            let x = virusCell[j][0];
            let y = virusCell[j][1];
            matrix[y][x]=1;
            let newgrass=new Grass (x,y);
           grassArr.push(newgrass);
            this.multiply=0;
			for (var i in minivirusgrassArr) {
                if (x == minivirusgrassArr[i].x && y == minivirusgrassArr[i].y) {
                   minivirusgrassArr.splice(i, 1);
                   break;
                }
            }
			}
        }
    }
    Havasarakshrel (){
        //xot
        if(grassArr.length<=this.MinGrass){
          
            let newCell=random(this.chooseCell(0));
            if(newCell)
            {
                let x = newCell[0];
                let y = newCell[1];
                matrix[y][x]=1;
                let newgrass=new Grass (x,y);
                grassArr.push(newgrass);
                this.multiply=0;
    
            }
        }
        //xotaker
        if(xotakerArr.length<=this.MinXotaker){
             let newCell=random(this.chooseCell(0));
		    if(newCell) {
		    	let x = newCell[0];
                let y = newCell[1];

		    	let xotaker = new Xotaker(x, y);
                xotakerArr.push(xotaker);
                
		    	matrix[y][x] = 2;
            }
            else{
                 newCell=random(this.chooseCell(0));
            }
            if(newCell) {
		    	let x = newCell[0];
                let y = newCell[1];

                let xotaker = new Xotaker(x, y);
                //xotaker.InGrass=true;
                //
                ///
                ////
                /////
                //////
                for (var i in grassArr) {
                    if ( x == grassArr[i].x && y == grassArr[i].y) {
                       grassArr.splice(i, 1);
                       break;
                    }}
                xotakerArr.push(xotaker);
                
		    	matrix[y][x] = 2;
            }
           
        }
        //gishatich
        if(gishatichArr.length<=this.MinGishatich){
            let newCell=random(this.chooseCell(0));
		if(newCell)
		{
			let x = newCell[0];
            let y = newCell[1];
			let norgishatich = new Gishatich(x, y);
			gishatichArr.push(norgishatich);
			matrix[y][x] = 3;
        }
        else{
            let newCell=random(this.chooseCell(1));
        if(newCell) {
			let x = newCell[0];
            let y = newCell[1];
			let norgishatich = new Gishatich(x, y);
			gishatichArr.push(norgishatich);
			matrix[y][x] = 3;
        }
        }
        }
    }
}