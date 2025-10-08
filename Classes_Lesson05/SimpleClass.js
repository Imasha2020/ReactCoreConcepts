class Square{

    constructor ( width , color)
    {
        console.log("New Rectangle Created");
        this.height = width;
        this.width = width ;
        this.color = color ;
    }

    //method
    getArea()
    {
        return this.height * this.width;
    }

    //area is a property not a method
    get area ()
    {
        return this.height * this.width;
    }

    //setter for area property
    set area (newArea) 
    {
        this.width = Math.sqrt(newArea);
        this.height = this.sqrt(newArea);

    }

    aboutMe()
    {
        return `I am a ${this.color} Square.
        My height is ${this.height} and my width is ${this.width}.`;
    }
}

const rect1 = new Square(10,"red");
console.log(rect1.getArea());//method call with ()
console.log(rect1.aboutMe());
console.log(rect1.area);//property access no ()

rect1.area = 25;//set area property
console.log(rect1.width);
console.log(rect1.area);
