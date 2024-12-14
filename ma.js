function findMaximum(arr) {
    
    let max = arr[0];
    
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; 
      }
    }
    
    return max;
  }
  
  
  const numbers = [3, 7, 2, 8, 6, 4];
  const maxNumber = findMaximum(numbers);
  
  console.log("Maximum number:", maxNumber); 
  