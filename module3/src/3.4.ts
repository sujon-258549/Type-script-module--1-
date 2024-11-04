{
    // instanof ooperation


    class Animal {
        constructor(public name: string, public spaces: string) {

        }

        makeSound(sound: string) {
            console.log(`this name: ${this.name} spaces ${this.spaces} It sound :${sound}`)
        }
    }



    class Cat extends Animal {
        constructor(name: string, spaces: string) {
            super(name, spaces)
        }

        makeSleepTime(time: number) {
            console.log(`Eting time: ${time} `)
        }

    }


    class Dog extends Animal {
        constructor(name: string, spaces: string) {
            super(name, spaces)
        }

        makeEthingTime(time: number) {
            console.log(`Eting time: ${time} `)
        }
    }


    //use smart way
    const catget = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }
    const dogget = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }

    const getAnimol = (animal: Animal) => {
        if (dogget(animal)) {
            animal.makeEthingTime(5);
        }
        else if (catget(animal)) {
            animal.makeSleepTime(25555555555555)
        }
        else {
            animal.makeSound('dus dus dus')
        }
    }

    const dog = new Cat('pasan22222222222222222222222', 'dog');
    const data = getAnimol(dog)




}