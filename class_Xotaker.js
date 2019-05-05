class Xotaker
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.multiply=0;
		this.energy=10;
        this.directions = [];
        this.InGrass = false;
        this.varaqvac = false;
        this.varSerund = false;
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
		
        //this.multiply++;
        let newCell = random(this.chooseCell(0));
        if(newCell)
        {
			
            let x = newCell[0];
            let y = newCell[1];
			//console.log(this.y,this.x);
			
            
            if(this.varaqvac){
                matrix[y][x]=2.5;
               }

           else{
            matrix[y][x]=2;
               }
          
			if(this.InGrass){
                matrix[this.y][this.x] = 1;
               }
           else{
                matrix[this.y][this.x] = 0;
               }
			this.y=y;
			this.x=x;
        }
    }
	utel()
    {
        let newCell=random(this.chooseCell(1));
        if(newCell)
        {
			
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x]=2;
            matrix[this.y][this.x] = 0;
            
			this.y=y;
			this.x=x;
			this.multiply++;
            this.energy++;
			
            for (var i in grassArr) {
                if ( x == grassArr[i].x && y == grassArr[i].y) {
                   grassArr.splice(i, 1);
                }
            }
			
			if (this.multiply >= 5) {
                this.Bazmanal()
                this.multiply = 0;
            }

        }
        else 
        {
             newCell=random(this.chooseCell(1.25));
        }
        if(newCell&&this.energy<=6)
        {
			
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x]=2;
            matrix[this.y][this.x] = 0;
            
			this.y=y;
			this.x=x;
			this.multiply++;
            this.energy++;
            this.varaqvac = true;
			
            for (var i in minivirusgrassArr) {
                if ( x == minivirusgrassArr[i].x && y == minivirusgrassArr[i].y) {
                    minivirusgrassArr.splice(i, 1);
                }
            }
			
			if (this.multiply >= 5) {
                this.Bazmanal()
                this.multiply = 0;
            }

        }
        else 
        {
             newCell=random(this.chooseCell(1.5));
        }
        if(newCell&&this.energy<=6)
        {
			
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x]=2;
            matrix[this.y][this.x] = 0;
            
			this.y=y;
			this.x=x;
			this.multiply++;
            this.energy++;
            this.varaqvac = true;
            this.varSerund = true;
			
            for (var i in virusgrassArr) {
                if ( x == virusgrassArr[i].x && y == virusgrassArr[i].y) {
                    virusgrassArr.splice(i, 1);
                }
            }
			
			if (this.multiply >= 5) {
                this.Bazmanal()
                this.multiply = 0;
            }

        }

		 else {
            this.sharjvel();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
	 
	Bazmanal()
	{
		let newCell=random(this.chooseCell(0));
        if(newCell){
        if(this.varSerund==false)
		{
			let x = newCell[0];
            let y = newCell[1];
			let xotaker = new Xotaker(x, y);
			xotakerArr.push(xotaker);
			matrix[y][x] = 2;
        }
        if(this.varSerund==true)
		{
			let x = newCell[0];
            let y = newCell[1];
            let xotaker = new Xotaker(x, y);
            xotaker.varaqvac=true;
			xotakerArr.push(xotaker);
			matrix[y][x] = 2.5;
        }
    }
        else{
        let newCell=random(this.chooseCell(1));
		if(newCell&&this.varaqvac==false)
		{
			let x = newCell[0];
            let y = newCell[1];
            let xotaker = new Xotaker(x, y);
            xotaker.InGrass=true;
			xotakerArr.push(xotaker);
			matrix[y][x] = 2;
        }
        if(newCell&&this.varaqvac==true)
		{
			let x = newCell[0];
            let y = newCell[1];
            let xotaker = new Xotaker(x, y);
            xotaker.varaqvac=true;
            xotaker.InGrass=true;
			xotakerArr.push(xotaker);
			matrix[y][x] = 2.5;
        }
    }
		
    }
   
  
	
	die()
	{
        if(this.InGrass){
             matrix[this.y][this.x] = 1;
            }
        else{
                matrix[this.y][this.x] = 0;
            }
		 for (var i in xotakerArr) {
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                xotakerArr.splice(i, 1);
            }
        }
	}
	
}