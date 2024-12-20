console.log("**Write a JavaScript code to extract numbers between two characters in a string and add them all (use Alpha numeric Numberics as input)")

let inputString = "abc123def456ghi789";
let result = extractAndSumNumbers(inputString, "a", "g");
function extractAndSumNumbers(str, startChar, endChar) {
    
    const regex = new RegExp(`(?<=${startChar})(\\d+)(?=${endChar})`, 'g');
    let match;
    let sum = 0;
  
    
    while ((match = regex.exec(str)) !== null) {
      sum += parseInt(match[1], 10); 
    }
  
    return sum;
  }
  
  
 
  console.log(result);  
  