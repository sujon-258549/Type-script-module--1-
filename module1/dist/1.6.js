"use strict";
// functon 
// 1.normal function
// 2.Arrow Function
function maltification(num1, num2) {
    return num1 * num2;
}
maltification(10, 2);
const maltificationData = (num3 = 10, num4 = 10) => {
    return num3 + num4;
};
console.log(maltificationData);
// map type define
const arryNumbers = [10, 5, 15, 4, 2, 9];
const newArrayData = arryNumbers.map((arryNumber) => {
    return arryNumber * arryNumber;
});
