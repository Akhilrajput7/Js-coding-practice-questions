// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
//  For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.

function takesNumber (arr1 , arr2){
 var commonElements = []

 for(let i = 0; i < arr1.length ; i++){
      if(arr2.includes(arr1[i])){

         if (!commonElements.includes(arr1[i])) {
            commonElements.push(arr1[i])
      }
   }
 }
//   commonElements.sort = ((a,b) => a-b);

  return commonElements

}
 
let arr1 = [1,2,3,4,5]
let arr2 = [3,4,5,6,7]

const commonElements = takesNumber(arr1 ,arr2)

console.log(commonElements);