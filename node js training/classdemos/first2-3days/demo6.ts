class Rectangle1{
   private _width:number;
   private   _height:number;
    constructor( width: number,  height: number) {
        this._width = width;
        this._height = height;
    }

    getArea() {
        return this._width * this._height;
    }
}

v