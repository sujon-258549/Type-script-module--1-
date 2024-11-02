{
    //genarik type 
    
const  arrayData = (params :string): string[]=>{

    return []
}



const  arrayData2 = <T>(params :T): T[]=>{

    return [params];
   
}



// const newData =  arrayData2<string>('banglasehs')
// 
 interface ArrayDAta2{
    name:string;
    phoneNumber:number
 }

const newData = arrayData2<ArrayDAta2>(
    {name:'sujon', phoneNumber:1444545})
console.log(newData)



//bable data insert flow the cod



// const newData =  arrayData2<string>('banglasehs')
// 

// const  arrayData2 = <T>(params :T): T[]=>{

//     return [params];
   
// }
// interface ArrayDAta2 {
//     name: string;
//     phoneNumber: number
// }

// const newData = arrayData2<ArrayDAta2>(
//     [
//         { name: 'sujon', phoneNumber: 1444545 },
//         { name: 'sujon', phoneNumber: 144411545 }
//     ]
// )
// console.log(newData)






    // 
    

}