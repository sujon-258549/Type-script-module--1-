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
    const cat = new Animal('Ani', 'Dog');
    cat.makeSound('gawgaw');
    // 
    // 
}
