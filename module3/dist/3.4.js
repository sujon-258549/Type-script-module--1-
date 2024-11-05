"use strict";
{
    // instanof ooperation
    class Animal {
        constructor(name, spaces) {
            this.name = name;
            this.spaces = spaces;
        }
        makeSound(sound) {
            console.log(`this name: ${this.name} spaces ${this.spaces} It sound :${sound}`);
        }
    }
    class Cat extends Animal {
        constructor(name, spaces) {
            super(name, spaces);
        }
        makeSleepTime(time) {
            console.log(`Eting time: ${time} `);
        }
    }
    class Dog extends Animal {
        constructor(name, spaces) {
            super(name, spaces);
        }
        makeEthingTime(time) {
            console.log(`Eting time: ${time} `);
        }
    }
    //use smart way
    const catget = (animal) => {
        return animal instanceof Cat;
    };
    const dogget = (animal) => {
        return animal instanceof Dog;
    };
    const getAnimol = (animal) => {
        if (dogget(animal)) {
            animal.makeEthingTime(5);
        }
        else if (catget(animal)) {
            animal.makeSleepTime(25555555555555);
        }
        else {
            animal.makeSound('dus dus dus');
        }
    };
    const dog = new Cat('pasan22222222222222222222222', 'dog');
    const data = getAnimol(dog);
}
