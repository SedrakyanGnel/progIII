class Grass
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.multiply=0;
        this.directions = [];
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

    chooseCell()
    {
		 this.newDirections();
        let found=[];
        for(let i in this.directions)
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
            {

                if (matrix[y][x] == 0) 
                {
                    found.push(this.directions[i]);
                }
            }
     
        }
        return found;
    }
    mul()
    {
        this.multiply++;
        let newCell=random(this.chooseCell());
        if(this.multiply>=2 && newCell)
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