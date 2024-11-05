"use strict";
{
    // access modifire
    class Bank {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        modifyAddBallense(addBalence) {
            this._balance = this._balance + addBalence;
        }
        deductBalance(amount) {
            if (this._balance < amount) {
                console.log('Your balance is too low');
                return;
            }
            this._balance -= amount;
            console.log(`Deducted ${amount}. New balance: ${this._balance}`);
        }
    }
    const poorAccount = new Bank(1, 'Sujon', 150);
    poorAccount.deductBalance(51);
    // 
    // 
    // 
}
