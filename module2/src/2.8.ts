{
    //promice
     type Type = string

    const createPromice = ():Promise<Type> => {
        return new Promise(((resolve, reject) => {
            const data:Type = 'hellow I,m Data';
            if (data) {
                resolve(data)
            }
            else {
                reject("fail to lode data")
            }
        }))
    }

const  collCreatePromice = async():Promise<Type>=>{
    const result:Type = await createPromice()
    console.log(result)
    return result
}

collCreatePromice()

    // 
}