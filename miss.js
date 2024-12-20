console.log("**Write a program to find the missing numbers in an array containing numbers from 1 to 100.**")

let inputArray = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]; 
let result = findMissingNumbers(inputArray);
function findMissingNumbers(arr) {
    const fullSet = new Set(Array.from({ length: 100 }, (_, i) => i + 1)); 
    const arrSet = new Set(arr); 
  
    
    const missingNumbers = [...fullSet].filter(num => !arrSet.has(num));
    
    return missingNumbers;
  }
  
  
 
  console.log(result); 
  