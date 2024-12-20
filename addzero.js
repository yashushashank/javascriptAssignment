let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let modifiedArray = addZerosAfterEveryThree(inputArray);

let result = [];
function addZerosAfterEveryThree(arr) {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);  
      
     
      if ((i + 1) % 3 === 0 && i !== arr.length - 1) {
        result.push(0);
      }
    }
    
    return result;
  }
 
  console.log(modifiedArray); 
  