let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
  let flatArray = flattenArray(nestedArray);

let result = [];
function flattenArray(arr) {
    
    arr.forEach(element => {
      
      if (Array.isArray(element)) {
        result = result.concat(flattenArray(element)); 
      } else {
        result.push(element); 
      }
    });
    
    return result;
  }
  
  
  
  
  console.log(flatArray); 
  