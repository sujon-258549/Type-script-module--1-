
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


    // 
    // 
}