{
    // access modifire

    class Bank {
        constructor(readonly id: number, public name: string, private _balance: number) {

        }

        modifyAddBallense(addBalence: number) {
            this._balance = this._balance + addBalence
        }
        deductBalance(amount: number) {

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