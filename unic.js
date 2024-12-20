console.log("**Count the occurrences of each unique character in the string**")

let inputString = "hello world";
  let result = countCharacterOccurrences(inputString);
function countCharacterOccurrences(str) {
    const charCount = {};
  
    
    for (let char of str) {
      
      if (charCount[char]) {
        charCount[char]++;
      } else {
        
        charCount[char] = 1;
      }
    }
  
    return charCount;
  }
  
  
  
  console.log(result);
  