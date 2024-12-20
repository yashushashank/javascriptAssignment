console.log("**Write a function to find the second largest number in a nested array**")

let nestedArray = [
    [1, 3, 5],
    [7, 9],
    [2, 4, 8],
  ];
  let secondLargest = findSecondLargest(nestedArray);
function findSecondLargest(nestedArray) {
    
    const flatArray = nestedArray.flat(Infinity);
  
    
    const uniqueSortedArray = [...new Set(flatArray)].sort((a, b) => b - a);
  
   
    return uniqueSortedArray.length >= 2 ? uniqueSortedArray[1] : null;
  }
  
  
  
  console.log(secondLargest); 
  