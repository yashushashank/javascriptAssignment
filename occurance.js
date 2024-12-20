console.log("** Write a function to find how many times each element is repeated in an array.**")

let array = [1, 2, 2, 3, 4, 4, 4, 5];
let result = countOccurrences(array);
function countOccurrences(arr) {
    const occurrences = {};
  
    for (let element of arr) {
      occurrences[element] = (occurrences[element] || 0) + 1;
    }
  
    return occurrences;
  }
  
  
 
  
  console.log(result);
  
  