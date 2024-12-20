console.log("**Write a function to find the second maximum and minimum numbers in an array**")

let arr = [4, 2, 9, 1, 5, 7];
  let result = findSecondMaxMin(arr);
function findSecondMaxMin(arr) {
    if (arr.length < 2) {
      return { secondMax: null, secondMin: null }; 
    }
  
    let max = -Infinity;
    let secondMax = -Infinity;
    let min = Infinity;
    let secondMin = Infinity;
  
    for (let num of arr) {
      
      if (num > max) {
        secondMax = max;
        max = num;
      } else if (num > secondMax && num !== max) {
        secondMax = num;
      }
  
      
      if (num < min) {
        secondMin = min;
        min = num;
      } else if (num < secondMin && num !== min) {
        secondMin = num;
      }
    }
  
    return { secondMax: secondMax === -Infinity ? null : secondMax, secondMin: secondMin === Infinity ? null : secondMin };
  }
  
  
  
  
  console.log(result); 
  