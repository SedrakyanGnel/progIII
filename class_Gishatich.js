class Gishatich
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.multiply=0;
		this.energy=20;
        this.directions = [];
        this.InGrass=false;
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
            let x = this.directions[i][0];
            let y = this.directions[i][1];
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
    sharjvel()
    {
		
        let newCell=random(this.chooseCell(0));
        if(newCell)
        {
			
            let x = newCell[0];
            let y = newCell[1];
			//console.log(this.y,this.x);
			
			
            matrix[y][x]=3;
            if(this.InGrass){
                matrix [this.y][this.x] = 1;
                }
                else{
                    matrix [this.y][this.x] = 0;
                }
            
			this.y=y;
            this.x=x;
            this.InGrass=false;
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
            if(this.InGrass){
            matrix [this.y][this.x] = 1;
            }
            else{
                matrix [this.y][this.x] = 0;
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
                }
            }
			
			  if (this.multiply >= 5) {
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
        if(this.InGrass){
            matrix [this.y][this.x] = 1;
            }
            else{
                matrix [this.y][this.x] = 0;
            }
		 for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
	}
	
}