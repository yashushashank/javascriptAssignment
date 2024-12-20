console.log("** Filter numeric palindromes from the input array**")
 

let inputArray = [121, 123, 444, 787, 1001, 12321, 567];
  let result = filterNumericPalindromes(inputArray);
function isPalindrome(num) {
    
    const str = num.toString();
    return str === str.split('').reverse().join('');
  }
  
  function filterNumericPalindromes(arr) {
    return arr.filter(isPalindrome);
  }
  
 
  
  console.log(result); 
  