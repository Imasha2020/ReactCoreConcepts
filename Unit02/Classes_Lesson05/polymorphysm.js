class animal {
    constructor() {
        console.log("Animal is created.");
    }

    makeSound() {
        return "Animal Sound";
    }
}

class dog extends animal {
    constructor() {
        super();
        console.log("Dog is created.");
    }

    makeSound() {
        return "Bark";
    }
}

const a1 = new animal();
console.log(a1.makeSound());

const d1 = new dog();
console.log(d1.makeSound());
