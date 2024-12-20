

let numbers = [1, 2, 2, 3, 4, 4, 5];
  let uniqueNumbers = removeDuplicates(numbers);
  
let uniqueArray = [];
function removeDuplicates(arr) {
    
    arr.forEach(element => {
     
      let isDuplicate = false;
      uniqueArray.forEach(uniqueElement => {
        if (element === uniqueElement) {
          isDuplicate = true;
        }
      });
  
      
      if (!isDuplicate) {
        uniqueArray.push(element);
      }
    });
  
    return uniqueArray;
  }
  
 
  
  console.log(uniqueNumbers); 
  