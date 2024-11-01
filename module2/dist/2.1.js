"use strict";
{
    //type assartion
    let anything;
    anything = 'This is any thing'; //string
    anything = 222; // numner
    anything; // use number sugest number and use string sagetion number type 
    const gramtoKg = (value) => {
        if (typeof value === 'number') {
            const getValue = value * 1000;
            console.log(getValue);
        }
        if (typeof value === 'string') {
            const getValue = parseFloat(value) * 1000;
            console.log(getValue);
        }
        else {
            console.log(undefined);
        }
    };
    gramtoKg(10);
}
