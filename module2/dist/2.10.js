"use strict";
{
    // mapm type 
    const arryfoNumber = [1, 1, 5, 5, 4, 5, 8, 1, 56, 59, 1, 1, 45, 3, 2, 4, 5, 8, 1, 54, 4, 1, 5];
    const arryofString = arryfoNumber.map(str => str.toString());
    console.log(arryofString);
    const inputStringData = {
        height: 150,
        weidth: '150'
    };
    console.log(inputStringData);
    const task = (name, age, role) => {
        console.log(`Name : ${name} Age : ${age}, Youe Role : ${role}`);
    };
    task('sujon', 150, "admin");
    const mainNumber = (input) => {
        return input.split('').reverse().join('');
    };
    const mainNumber2 = (input) => {
        return input.split('').reverse().join("");
    };
    const mainInput = mainNumber2('hellow');
    // use reduse method
    const data = (...inputData) => {
        return inputData.reduce((number1, numner2) => number1 + numner2);
    };
    const inputpostData = data(1, 5, 48, 45, 8, 45, 15, 4, 2, 54, 12, 154, 8, 5, 4);
    // console.log(inputpostData)
    const dataInput = (value) => {
        return value;
    };
    const inputData = dataInput(1500);
    console.log(inputData);
    // 
    // 
}
