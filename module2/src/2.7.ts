{
    //////////////////








    // kyeof operator

    type Vehical = {
        bike: string;
        car: string;
        sipe: string
    }

    //  kye of use no manualy write
    type onner1 = "biky" | "car" | "sipe";
    type onner2 = keyof Vehical;


    const parson1: onner2 = 'car'


    const user = {
        name: "sujon",
        age: 23,
        education: 'diploma',
        phone: 1790876529
    }

    user['name']
    console.log(user["age"])


    const objectData = <X, Y extends keyof X>(obj: X, kye: Y) => {
        console.log(obj[kye])
        return obj[kye]
    }

    const postobjectData = objectData(user, "age")

    // 
    // 
}