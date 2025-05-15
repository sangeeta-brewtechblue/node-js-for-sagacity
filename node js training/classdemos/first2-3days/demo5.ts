class RectangleType{
 private   _height:number;
  private _width:number;
    constructor(height:number,width:number){
        this._height=height;
        this._width=width;
    }
    set height(height:number){
        this._height=height
    }
    get height():number{
        return this._height;
    }
    
   
    
    getArea():number{
        return(this._height * this._width)
    }
}

let rect1 = new RectangleType(10,3);
rect1.height=20
console.log(rect1.height)
console.log(rect1.getArea())

function showDetails(){
    console.log(rect1._height);
}

showDetails()