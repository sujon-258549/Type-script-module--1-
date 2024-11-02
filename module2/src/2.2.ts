{
    // interfase vs type alios
    type user = {
        name: string;
        email: string;

    }

    type user2 = {
        name: string;
        phone: number;

    }

    type Mianuse = user & user2

    const minUse: Mianuse = {
        name: 'sujon',
        email: 'sujon',
        phone: 1

    }

    //  interface use only object  type alious altim use 

    //  use interface 

    interface user3 {
        name: string;
        phone: number;

    }

//            final use varname     firstname
    interface newDAtaCreate extends user3 {
        // secend promis
        role: string
    }

    const newData: newDAtaCreate = {
        name: 'sujon',
        phone: 222,
        role: 'admin'
    }


    /////////////// array use interface 

    // fast use type alius
    type RollNumber = number[];

    // array use interface

    interface RollNumber2 {
        [index: number]: number
    }

    // use anytype example type alious and type interface
    const mainRollnumber: RollNumber2 = [1, 2, 5, 8, 6, 85, 5, 8]


    type Add = (n: number, n2: number) => number

    // interface
    interface Add2{
        (numner1:number, number2:number):number
    }
    const adition: Add2 = (number1, number2) => number1 + number2
    











    // 
}