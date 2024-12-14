function removeDuplicates(arr) {
    const uniqueArray = [];
    
  
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
  
 
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  
  console.log(uniqueNumbers); 
  