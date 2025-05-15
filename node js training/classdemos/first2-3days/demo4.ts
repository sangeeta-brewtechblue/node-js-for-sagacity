class Rectangle{

    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }


    getArea() {
        return this.width * this.height;
    }
}


let r = new Rectangle(10,3);  
 function fun1(){
    console.log(r.width);
 }
 
class Square extends Rectangle {
  
    constructor(width: number) {
     
        super(width, width); // Call the parent class constructor with width for both width and height
    }
}

let s = new Square(10) 
  
console.log(r.getArea())
console.log(s.getArea)




let r1 = new Rectangle(10,3)    ;
