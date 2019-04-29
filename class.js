			/*[this.x - 1, this.y - 1],
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
			[this.x-1, this.y - 2],*/
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
class MiniVirusGrass
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
class Fermer
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.multiply=0;
        this.directions = [];
        this.InGrass=false;
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
    sharjvel()
    {
		
        let newCell=random(this.chooseCell(0));
        if(newCell)
        {
			
            let x = newCell[0];
            let y = newCell[1];
			//console.log(this.y,this.x);
			
			
            matrix[y][x]=4;
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
			
			
            matrix[y][x]=4;
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
                xotaker.InGrass=true;
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
