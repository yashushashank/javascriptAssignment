let numbers = [3, 7, 2, 8, 6, 4];
const maxNumber = findMaximum(numbers);
let max = arr[0];
function findMaximum(arr) {
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; 
      }
    }
    
    return max;
  }
 
  console.log("Maximum number:", maxNumber); 
  