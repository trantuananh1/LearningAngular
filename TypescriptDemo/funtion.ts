let swapNumbs: [number, number];
function swapNumbers(num1: number, num2: number){
    return [num2, num1]
}

console.log(swapNumbers(2, 1))

function add (num1:number, num2:number, num3?:number) :number {
    return num3? num1 + num2 + num3 : num1 + num2
}
console.log(add(2,3))
console.log(add(1,2,3))

function add2(num1:number, num2:number, ...num3:number[]) : number {
    return num1 + num2 + num3.reduce((a, b) => a+b, 0)
}
let numbers = [1,2,3,4]
console.log(add2(1,2,...numbers))


const sub = (num1: number, num2: number):number => num1-num2