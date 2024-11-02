{
    //promice
    type Type = string

    const createPromice = (): Promise<Type> => {
        return new Promise(((resolve, reject) => {
            const data: Type = 'hellow I,m Data';
            if (data) {
                resolve(data)
            }
            else {
                reject("fail to lode data")
            }
        }))
    }

    const collCreatePromice = async (): Promise<Type> => {
        const result: Type = await createPromice()
        // console.log(result)
        return result
    }

    collCreatePromice()


    //  use json pleaceholder

    interface Usertype {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }
    // prumise use must be use type 
    const useJsonPlaceholder = async (): Promise<Usertype> => {
        const resoponse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result2:Usertype = await resoponse.json();
        return result2
    }
    const logPostUser = async () => {
        const postUser = await useJsonPlaceholder();
        console.log(postUser);
    };

    logPostUser()



    // const useJsonPlaceholder = async (): Promise<Usertype> => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     const result: Usertype = await response.json();
    //     return result;
    // };
    
    // // Use async function to log the resolved data
    // const logPostUser = async () => {
    //     const postUser = await useJsonPlaceholder();
    //     console.log(postUser);
    // };
    
    // logPostUser();
    

    // 
}