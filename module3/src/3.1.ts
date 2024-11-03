{
    // object orianted programing 

    // instan.................................................old system
    class Animal {
        name: string;
        species: string;
        color: string;

        constructor(name: string, species: string, color: string) {
            this.name = name;
            this.species = species;
            this.color = color;
        }

        makeSound() {
            console.log(`The Animal ${this.name} Animal Category${this.species} color${this.color}`)
        }

    }

    const firstDog = new Animal('coiel', 'bard', 'mix')
    const firstDog2 = new Animal('coiel', 'bard2', 'mix12')

    // firstDog2.makeSound()

        // instan.................................................new system
        // only change publick 
    class Animal2 {
        constructor(public name: string,public species: string,public color: string) {  // publick add 
        }
        makeSound() {
            console.log(`The Animal ${this.name} Animal Category${this.species} color${this.color}`)
        }

    }

    const firstDog0 = new Animal('coiel', 'bard', 'mix')
    const firstDog20 = new Animal('coiel', 'bard2', 'mix12')

    firstDog20.makeSound()



}