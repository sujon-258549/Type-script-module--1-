{
    //typer alias
    // 
    // 
    // 
    type Student = {
        name: string;
        roll: number;
        email: string;
        phone?: number;
        address?: string
    }
    const stydentData1: Student
        = {
        name: 'sujon',
        roll: 405221,
        email: "sujon258549@gmail.com",
        phone: 1790876529,
        address: 'Rangpur',

    }
    const stydentData2: Student = {
        name: 'sujon',
        roll: 405221,
        email: "sujon258549@gmail.com",
        phone: 1790876529,
        address: 'Rangpur',

    }
    const stydentData: Student = {
        name: 'sujon',
        roll: 405221,
        email: "sujon258549@gmail.com",
        phone: 1790876529,
        address: 'Rangpur',

    }

    //function type alias


    const toral = (number1: number, number2: number) => number1 + number2    //older sistem


    type Toral = (numner1:number , number2:number) => number

    const toral2 :Toral = (number1, number2) => number1 + number2    //Stander function alias sistem


}