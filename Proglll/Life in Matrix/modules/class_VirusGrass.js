var Grass = require("./class_Grass.js")
var MiniVirusGrass = require("./class_MiniVirusGrass.js")


function random (arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
    
}
module.exports = class VirusGrass extends Grass
{
    constructor(x,y)
    {
        super(x, y);
    }
	

    chooseCell(ch)
    {
         return super.chooseCell(ch);
    }
    mul()
    {
        this.multiply++;
        let newCell=random(this.chooseCell(1));
        if(this.multiply/MulSpeed>=5 && newCell)
        {
            let x = newCell[0];
            let y = newCell[1];
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
		else
		{
            newCell=random(this.chooseCell(1.25));
            if(this.multiply/MulSpeed>=15 && newCell)
        {
            let x = newCell[0];
            let y = newCell[1];
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
		
    }
}