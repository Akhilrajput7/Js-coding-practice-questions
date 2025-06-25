// Write a program that displays a string in reverse order.

function reverseString(str){
   const revstring = str.split("").reverse().join()
   return revstring
}

console.log(reverseString("akhil"));

