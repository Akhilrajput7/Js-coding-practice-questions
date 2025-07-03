// Write a program that takes a string and prints out the number of vowels in the string.

function find(strng){
    let vowels = ['a' , 'e' , 'i' , 'o' , 'u']
    let count = 0
     for( let i = 0 ; i < strng.length; i++){
         if(vowels.includes(strng[i])){
            count++ ;
         }
             
     }
      return count;
}

console.log(find("akhil rajput"))