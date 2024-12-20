console.log("**Write a function to convert a string from snake_case to camelCase**")


let snakeStr = "hello_world_this_is_snake_case";
  let camelStr = snakeToCamel(snakeStr);
function snakeToCamel(snakeStr) {
    return snakeStr
      .split('_') 
      .map((word, index) => {
        if (index === 0) {
          
          return word.toLowerCase();
        }
        
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(''); 
  }
  
  
  
  console.log(camelStr); 
  