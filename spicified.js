console.log("*******Write a function to generate the specified pattern******")

function generatePattern(n) {
    let result = "";
  
    for (let i = 1; i <= n; i++) {
      let row = [];
      let left = i; 
      let right = n * (i - 1) + 1; 
      
      for (let j = 1; j <= i; j++) {
        
        if (j % 2 !== 0) {
          row.push(left);
          left++; 
        } else {
          row.push(right);
          right--; 
        }
      }
      
      result += row.join(" ") + "\n";
    }
  
    console.log(result);
  }
  

  generatePattern(5);
  