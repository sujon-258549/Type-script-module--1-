{
    // gattear and satter




    // access modifire

    class Bank {
        constructor(readonly id: number, public name: string, private _balance: number) {

        }

        get Balanse() {
            return console.log(this._balance)
        }
        set Balanses(input: number) {
            console.log(this._balance += input)
        }

    }

    const poorAccount = new Bank(1, 'Sujon', 50);
    const currentBalanse = poorAccount.Balanses = 150;
    // console.log(currentBalanse)










    // 
}