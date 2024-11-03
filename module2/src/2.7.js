"use strict";
{
    const parson1 = 'car';
    // const user = {
    //     name: "sujon",
    //     age: 23,
    //     education: 'diploma',
    //     phone: 1790876529
    // }
    // user['name']
    // console.log(user["age"])   
    // const objectData = <X, Y extends keyof X>(obj: X, kye: Y) => {
    //     console.log(obj[kye])
    //     return obj[kye]
    // }
    // const postobjectData = objectData(user, "age")
    const user2 = {
        name: 'ami',
        home: 'ran',
        phone: 115,
    };
    const userGetData = (objs, keys) => {
        return objs[keys];
    };
    const result = userGetData(user2, 'phone');
    console.log(result);
    // 
    // 
}
