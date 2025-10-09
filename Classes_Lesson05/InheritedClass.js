class person {
    constructor(name , age)
    {
        this.name = name;
        this.age = age;
        console.log("Person is created.");
    }
}

class programmer extends person {
    constructor(name , age , language)
    {
        super(name , age);
        this.language = language;
        console.log("Programmer is created")
    }

    code(){
        return `I am ${this.name} and I code in ${this.language}.`;
    }

    static about(){
        return "I am a programmer";
    }
}

const p1 = new programmer("Imasha" , 23 , "Java");
console.log(p1.code())
console.log(programmer.about());
