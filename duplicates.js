console.log("** Write a function to remove duplicate characters in a string**")


let input = "programming";
  let output = removeDuplicateCharacters(input);
function removeDuplicateCharacters(str) {
    let result = "";
    const seen = new Set();
  
    for (let char of str) {
      if (!seen.has(char)) {
        result += char;
        seen.add(char);
      }
    }
  
    return result;
  }
  
 
  
  console.log(output); 
  