console.log(" Write a function to count repeated characters in a string and print in a string format")

let inputString = "aabccdeeff";
  let result = countRepeatedCharacters(inputString);
function countRepeatedCharacters(str) {
    const charCount = {};
    let result = '';
  
    
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    
    for (let char in charCount) {
      if (charCount[char] > 1) {
        result += char + charCount[char];  
      }
    }
  
    return result;
  }
  
  
  
  console.log(result); 
  