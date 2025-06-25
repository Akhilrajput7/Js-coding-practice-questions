// Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

function sumNumbers(number){
    let sum = 0
    for( let i = 1 ; i<=number ; i++){
        sum = sum+ i
        
    }
     return sum
}

console.log(sumNumbers(5))