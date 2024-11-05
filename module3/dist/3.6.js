"use strict";
{
    // gattear and satter
    // access modifire
    class Bank {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        // use get operatior
        get Balanse() {
            return console.log(this._balance);
        } // use set operator
        set Balanses(input) {
            console.log(this._balance += input);
        }
    }
    const poorAccount = new Bank(1, 'Sujon', 50);
    const currentBalanse = poorAccount.Balanses = 150;
    // console.log(currentBalanse)
    // 
}
