console.log("** Write a function to capitalize the first letter of each word in an array of strings**")


let words = ["hello", "world", "javascript", "is", "awesome"];
  let capitalizedWords = capitalizeWords(words);
function capitalizeWords(words) {
    return words.map(word => {
      if (word.length === 0) return word; 
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
  }
  
 
  
  
  console.log(capitalizedWords); 
  