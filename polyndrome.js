let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
function isPalindrome(str) {
    
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    
    return cleanedStr === reversedStr;
  }
  
 
  console.log(isPalindrome("Racecar")); 
  console.log(isPalindrome("Hello"));   
  console.log(isPalindrome("A man, a plan, a canal, Panama")); 
  