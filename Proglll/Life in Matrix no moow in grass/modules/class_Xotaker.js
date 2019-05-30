var LivingCreature = require("./class_LivingCreature.js")


function random (arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
    
}
module.exports = class Xotaker extends LivingCreature
{
    constructor(x,y)
    {
        super(x, y);
		this.energy=10;
        //this.InGrass = false;
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

    chooseCell(ch)
    {
		this.newDirections();
        return super.chooseCell(ch);
    }
    sharjvel()
    {
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
          
		// 	if(this.InGrass){
        //         matrix[this.y][this.x] = 1;
        //        }
        //    else{
        //         matrix[this.y][this.x] = 0;
        //        }
        matrix[this.y][this.x] = 0;
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
                   break;
                }
            }
			
			if (this.multiply*MulSpeed*2 >= 5) {
                this.Bazmanal()
                this.multiply = 0;
            }

        }
        else 
        {
             newCell=random(this.chooseCell(1.25));
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
                        break;
                    }
                }
                
                if (this.multiply*MulSpeed*2 >= 5) {
                    this.Bazmanal()
                    this.multiply = 0;
                }

            }
            else 
            {
                newCell=random(this.chooseCell(1.5));
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
                            break;
                        }
                    }
                    
                    if (this.multiply*MulSpeed*2 >= 5) {
                        this.Bazmanal()
                        this.multiply = 0;
                    }

                }//ete ban chgtav
                
                else {
                    this.sharjvel();
                    this.energy--;
                    if (this.energy <= 0) {
                        this.die();
                    }
                }
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
            //xotaker.InGrass=true;
            
            for (var i in grassArr) {
                if ( x == grassArr[i].x && y == grassArr[i].y) {
                   grassArr.splice(i, 1);
                   break;
                }}
            
			xotakerArr.push(xotaker);
			matrix[y][x] = 2;
        }
        if(newCell&&this.varaqvac==true)
		{
			let x = newCell[0];
            let y = newCell[1];
            let xotaker = new Xotaker(x, y);
            xotaker.varaqvac=true;
            //xotaker.InGrass=true;
            for (var i in grassArr) {
                if ( x == grassArr[i].x && y == grassArr[i].y) {
                   grassArr.splice(i, 1);
                   break;
                }}
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
                break;
            }
        }
	}
	
}