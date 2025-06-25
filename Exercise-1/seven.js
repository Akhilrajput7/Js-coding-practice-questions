// Write a program that takes a number and prints the multiplication table for that number.

function multiplication(number){
     
      
    for (let num = 1; num <= 10  ; num++) {
         const multi = number*num
         
         console.log(multi)
    }
   
}


multiplication(10)