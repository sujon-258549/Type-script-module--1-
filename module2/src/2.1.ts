{
    //type assartion
    let anything: any;
    anything = 'This is any thing'; //string
    anything = 222; // numner
    (anything as string)  // use number sugest number and use string sagetion number type 


    const gramtoKg = (value: string | number | undefined): (string | number | undefined) => {
        if (typeof value === 'number') {
            const getValue = value * 1000
            console.log(getValue)
            return getValue
        }
        if (typeof value === 'string') {
            const getValue = parseFloat(value) * 1000
            console.log(getValue)
            return getValue
        }
        else {
            console.log(undefined)
            return
        }
    }
    gramtoKg(100)


}