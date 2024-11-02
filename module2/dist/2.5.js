"use strict";
{
    //genarik type 
    const arrayData = (params) => {
        return [];
    };
    const arrayData2 = (params) => {
        return [params];
    };
    const newData = arrayData2({ name: 'sujon', phoneNumber: 1444545 });
    console.log(newData);
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
    // create tople 
    // interface TopoleData{
    //     A:string;
    //     B:number
    // }
    const topoleData = (params1, params2, params3) => {
        return [params1, params2, params3];
    };
    // const clgTopoldata = topoleData<string, number>('sujon',150) 
    const clgTopoldata = topoleData('sujon', 150, { Phone: 555555 });
    console.log(clgTopoldata);
    const allStudent = (studentData) => {
        const previousData = 'good Student';
        const result = studentData.map(student => (Object.assign(Object.assign({}, student), { previousData })));
        console.log(result);
        return result;
    };
    const inputData = allStudent([
        {
            name: 'sujon',
            roll: 15001545
        },
        { name: 'k', roll: 550 },
        { name: 'k', roll: 550 }
    ]);
    // 
}
