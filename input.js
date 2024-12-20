console.log("** Write a function for input**")

let inputArray = ["1a1", "2aa3a", 'aabc31', "101", "1001", "a1", "3211", "11c"];
  let result = filterNumericPalindromes(inputArray);
function isNumericPalindrome(str) {
    
    if (/^\d+$/.test(str)) {
     
      return str === str.split('').reverse().join('');
    }
    return false;
  }
  
  function filterNumericPalindromes(arr) {
    return arr.filter(isNumericPalindrome);
  }
  
  
  
  console.log(result); 
  