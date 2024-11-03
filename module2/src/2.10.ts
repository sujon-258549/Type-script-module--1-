
{
    // mapm type 


    const arryfoNumber: number[] = [1, 1, 5, 5, 4, 5, 8, 1, 56, 59, 1, 1, 45, 3, 2, 4, 5, 8, 1, 54, 4, 1, 5]

    const arryofString: string[] = arryfoNumber.map(str => str.toString()
    )

    console.log(arryofString)

    type AreaofNumber = {
        height: number;
        weidth: number
    }

    // use typesctipt  Map type
    type StringAreaofNumber = {
        [kye in keyof AreaofNumber]: string
    }

    // dynamic genaric type ......................................................................

    type StringAreaofNumber2<T> = {
        [kye in keyof T]: T[kye]
    }
    const inputStringData: StringAreaofNumber2<{ height: number, weidth: string }> = {
        height: 150,
        weidth: '150'
    }

    console.log(inputStringData)


    // look up
    type Height = AreaofNumber['height']


    const task = (name: string, age: number, role: 'admin' | 'gest' | 'user') => {
        console.log(`Name : ${name} Age : ${age}, Youe Role : ${role}`);

    }

    task('sujon', 150, "admin")
    const mainNumber = (input: string) => {
        return input.split('').reverse().join('')
    }

    const mainNumber2 = (input: string) => {
        return input.split('').reverse().join("");
    }

    const mainInput = mainNumber2('hellow')


    // use reduse method
    const data = (...inputData: number[]): number => {
        return inputData.reduce((number1, numner2) => number1 + numner2)
    }

    const inputpostData = data(1, 5, 48, 45, 8, 45, 15, 4, 2, 54, 12, 154, 8, 5, 4)

    console.log(inputpostData)


    // 
    // 
}