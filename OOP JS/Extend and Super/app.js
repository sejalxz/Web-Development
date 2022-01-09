class Pet{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log("IN PET CONSTRUCTOR");
    }
    eat(){
        return `${this.name} is eating!`
    }
}

class Cat extends Pet{
    constructor(name,age,color){
        super(name,age);
        this.color = color;
        console.log("IN CAT CONSTRUCTOR");
    }
    meow(){
        return`MEOWWWW!`
    }
}

class Dog extends Pet{
    bark(){
        return `WOOOOOFF!`
    }

    eat(){
        return `${this.name} scarfs food!`
    }
}