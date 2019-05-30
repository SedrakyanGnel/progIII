var LivingCreature = require("./class_LivingCreature.js")
VirusGrass = require("./class_VirusGrass.js");
let MiniVirusGrass = require("./class_MiniVirusGrass.js");
Fermer = require("./class_Fermer.js");

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
        this.MinVirus=5;
        this.MinMiniVirus=0;
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
			
			
            matrix[y][x]=5;
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
        else
        {
            let newCell=random(this.chooseCell(1));
        if(newCell)
        {
			
            let x = newCell[0];
            let y = newCell[1];
			//console.log(this.y,this.x);
			
			
            matrix[y][x]=5;
            // if(this.InGrass){
            // matrix [this.y][this.x] = 1;
            // }
            // else{
            //     matrix [this.y][this.x] = 0;
            // }
            for (var i in grassArr) {
                if ( x == grassArr[i].x && y == grassArr[i].y) {
                   grassArr.splice(i, 1);
                   break;
                }}
            matrix [this.y][this.x] = 0;//jnjel
			this.y=y;
            this.x=x;
            //this.InGrass=true;
        }
        }
    }
    varaqel()
    {
        this.multiply++;
        let virusCell=this.chooseCell(1.25);
        if(virusgrassArr.length<=this.MinMiniVirus)
        {   
			for (let j in virusCell)
			{
            let x = virusCell[j][0];
            let y = virusCell[j][1];
            matrix[y][x]=1.5;
            let newvirusgrass=new VirusGrass (x,y);
            virusgrassArr.push(newvirusgrass);
            this.multiply=0;
                for (var i in minivirusgrassArr) {
                    if (x == minivirusgrassArr[i].x && y == minivirusgrassArr[i].y) {
                    minivirusgrassArr.splice(i, 1);
                    break;
                    }
                }
			}   
        }
        virusCell=this.chooseCell(1);
        if(virusgrassArr.length<=this.MinVirus)
        {   
			for (let j in virusCell)
			{
            let x = virusCell[j][0];
            let y = virusCell[j][1];
            matrix[y][x]=1.25;
            let newminivirusgrass=new MiniVirusGrass (x,y);
            minivirusgrassArr.push(newminivirusgrass);
            this.multiply=0;
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                    }
                }
			}   
        }
        
        
    }
}