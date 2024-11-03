"use strict";
{
    // object orianted programing 
    // instan.................................................old system
    class Animal {
        constructor(name, species, color) {
            this.name = name;
            this.species = species;
            this.color = color;
        }
        makeSound() {
            console.log(`The Animal ${this.name} Animal Category${this.species} color${this.color}`);
        }
    }
    const firstDog = new Animal('coiel', 'bard', 'mix');
    const firstDog2 = new Animal('coiel', 'bard2', 'mix12');
    // firstDog2.makeSound()
    // instan.................................................new system
    // only change publick 
    class Animal2 {
        constructor(name, species, color) {
            this.name = name;
            this.species = species;
            this.color = color;
        }
        makeSound() {
            console.log(`The Animal ${this.name} Animal Category${this.species} color${this.color}`);
        }
    }
    const firstDog0 = new Animal('coiel', 'bard', 'mix');
    const firstDog20 = new Animal('coiel', 'bard2', 'mix12');
    firstDog20.makeSound();
}
