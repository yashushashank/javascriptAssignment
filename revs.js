console.log("**Write a function to reverse a string without using built-in methods**")

let original = "hello";
  let reversed = reverseString(original);
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  
  
  console.log(reversed); 
  