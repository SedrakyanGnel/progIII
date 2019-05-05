class VirusGrass
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

    chooseCell(t)
    {
		 this.newDirections();
        let found=[];
        for(let i in this.directions)
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
            {

                if (matrix[y][x] == t) 
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
        let newCell=random(this.chooseCell(1));
        if(this.multiply>=2 && newCell)
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
                }
            }

        }
		else
		{
			newCell=random(this.chooseCell(1.25));
		}
		if(this.multiply>=10 && newCell)
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
                }
            }

        }
    }
}