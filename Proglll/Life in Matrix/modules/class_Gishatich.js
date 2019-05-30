var LivingCreature = require("./class_LivingCreature.js")


function random (arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
    
}
module.exports = class Gishatich extends LivingCreature
{
    constructor(x,y)
    {
        super(x, y);
		this.energy=20;
       // this.InGrass=false;
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
            [this.x + 1, this.y + 1]
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
			
			
            matrix[y][x]=3;
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
			
			
            matrix[y][x]=3;
            // if(this.InGrass){
            // matrix [this.y][this.x] = 1;
            // }
            // else{
            //     matrix [this.y][this.x] = 0;
            // }
            matrix [this.y][this.x] = 0;//jnjel
            for (var i in grassArr) {
                if ( x == grassArr[i].x && y == grassArr[i].y) {
                   grassArr.splice(i, 1);
                   break;
                }
            }
			this.y=y;
            this.x=x;
            this.InGrass=true;
        }
        }
    }
	utel()
    {
        let newCell=random(this.chooseCell(2));
        if(newCell)
        {
			
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x]=3;
            matrix[this.y][this.x] = 0;
            
			this.y=y;
            this.x=x;
            
			this.multiply++;
            this.energy++;
			
             for (var i in xotakerArr) {
                if (x == xotakerArr[i].x && y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
			
			  if (this.multiply*MulSpeed*0.5 >= 4) {
                this.Bazmanal()
                this.multiply = 0;
            }

        }
		 else {
            this. sharjvel();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
	 
	Bazmanal()
	{
		let newCell=random(this.chooseCell(2));
		if(newCell)
		{
			let x = newCell[0];
            let y = newCell[1];
			let norgishatich = new Gishatich(x, y);
			gishatichArr.push(norgishatich);
			matrix[y][x] = 3;
		}
	
	}
	
	die()
	{
        // if(this.InGrass){
        //     matrix [this.y][this.x] = 1;
        //     }
        //     else{
        //         matrix [this.y][this.x] = 0;
        //     }
        matrix [this.y][this.x] = 0;
		 for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                break;
            }
        }
	}
	
}