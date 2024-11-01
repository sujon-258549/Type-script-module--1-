"use strict";
{
    // sparate oparator
    const allName = ["md", "sujon", 'mia'];
    const allName2 = ["md", "sujon", 'mia'];
    // allName.push(allName)
    allName.push(...allName);
    const country = {
        toplavel: 'cina',
        midlavel: "India",
        lowlavel: 'Bangladesh'
    };
    const country2 = {
        toplavel: 'cina2',
        midlavel: "India2",
        lowlavel: 'Bangladesh2'
    };
    const allCountry = Object.assign(Object.assign({}, country), country2);
    // rest oparator
    // 
    const myFrendlist = (...frends) => {
        return frends.forEach((frend) => console.log(`Hi Frend,${frend}`));
    };
    myFrendlist('siddek', 'sunmun', 'mehedi', 'subel');
    // distractating
}
