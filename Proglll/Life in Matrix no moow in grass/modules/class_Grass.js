var LivingCreature = require("./class_LivingCreature.js")



function random (arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
    
}
module.exports = class Grass  extends LivingCreature
{
    constructor(x,y)
    {
        super(x, y);
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
         return super.chooseCell(ch);
    }
    mul()
    {
        this.multiply++;
        let newCell=random(this.chooseCell(0));
        if(this.multiply*MulSpeed>=2 && newCell)
        {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x]=1;
            let newgrass=new Grass (x,y);
            grassArr.push(newgrass);
            this.multiply=0;

        }
    }
}