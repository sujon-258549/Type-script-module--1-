// functon 
// 1.normal function
// 2.Arrow Function

function maltification(num1: number, num2: number): number {
    return num1 * num2

}

maltification(10, 2)

const maltificationData = (num3: number=10, num4: number=10) => {
    return num3 + num4
}

console.log(maltificationData)


// map type define
const arryNumbers:number[] = [10, 5,15,4,2,9]

const newArrayData:number[] = arryNumbers.map((arryNumber:number):number =>{
   return arryNumber*arryNumber
})