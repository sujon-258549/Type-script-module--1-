"use strict";
{
    // tarnary operator || optonal caining || and 
    // 
    let old = 22;
    if (old >= 18) {
        console.log('It is adalt');
    }
    else {
        console.log("it is no adalt");
    }
    const isAdalt = old >= 18 ? console.log('it is adalt') : console.log(' it is no adalt');
    // nalis qualifing operator
    // How to use nalis qualification operrator use nul and undefine 
    const data = null;
    const gest = data !== null && data !== void 0 ? data : 'gest';
}
