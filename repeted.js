let inputString = "aabbbccdde";
const charCount = {};  
    let result = ''; 
    
function countRepeatedChars(str) {
    
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      
      charCount[char] = (charCount[char] || 0) + 1;
    }
    
    
    for (const char in charCount) {
      if (charCount[char] > 1) {
        result += `${char}${charCount[char]}`;  
      }
    }
    
    return result;
  }
  
 
 
  const repeatedChars = countRepeatedChars(inputString);
  
  console.log(repeatedChars);
  