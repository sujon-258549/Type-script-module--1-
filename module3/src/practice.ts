{
    // maping.....................
    type User = {
        id: number;
        name: string;
        address: string
    }

    type StringAreaofNumber = {
        [kye in keyof User]: string
    }

    type StringAreaofNumber2<T> = {
        [kye in keyof T]: T[kye]
    }

    // const data: StringAreaofNumber2<{ id: number, name: string, address: string }> = {
    //     id: 10,
    //     name: '20',
    //     address: 'fdsafsaf'
    // }

    const data2: User = {
        id: 10,
        name: 'sujon',
        address: 'fasfas'
    }


    // console.log(data2)

    // let asartion: any;

    const checkDataFunction = (value: string | number | boolean) => {
        if (typeof value === 'number') {
            console.log('this is string')
        }
        else if (typeof value === 'string') {
            console.log('This is number')
        }
        else if (typeof value === 'boolean') {
            console.log('this is boolian')
        }
    }

    const data = checkDataFunction(true)


    // ganerik main concept is no frist no type use use input insert type /////////

    // input array .....................
    type DynamicType<T> = T[];
    const name: DynamicType<string> = ['sujon', 'mia', 'sujon']
    const roll: DynamicType<number> = [2, 15, 5]
    console.log(roll)
    // genarik type object
    type DynamicObject<X> = X;
    const userInfo: DynamicObject<{ name: string; role: string }> = {
        name: 'sujon',
        role: 'admin',
    };
    // ganarik type function
    type FunctionData<F> = (value: F) => void;
    const functionData: FunctionData<{ name: string, age: number }> = (value) => {
        return value
    }

    const main = functionData({ name: 'sujon', age: 22 })
    console.log(main)


    // more genaric function.................................................................
    const GenarikFunction = <M>(...param: M[]): M[] => {
        return param
    }

    const inputFunction = GenarikFunction<{ name: string, phone: number }>(
        {
            name: 'sujon',
            phone: 50
        }
    )
    const inputFunction2 = GenarikFunction<{ name: string, phone: number }>(
        {
            name: 'sujon',
            phone: 50
        },
        {
            name: 'sujon',
            phone: 50
        },
        {
            name: 'sujon',
            phone: 50
        },
        {
            name: 'sujon',
            phone: 50
        }
    )

    console.log( inputFunction2)

    // 
}