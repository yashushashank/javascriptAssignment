console.log("** Write a function to merge two arrays with extra zeros**")


let arr1 = [1, 3, 5, 0, 0, 0]; 
  let arr2 = [2, 4, 6];         
  let result = mergeArrays(arr1, arr2);
function mergeArrays(arr1, arr2) {
    const n = arr1.length - arr2.length; 
    let i = n - 1; 
    let j = arr2.length - 1; 
    let k = arr1.length - 1; 
  
    
    while (i >= 0 && j >= 0) {
      if (arr1[i] > arr2[j]) {
        arr1[k--] = arr1[i--];
      } else {
        arr1[k--] = arr2[j--];
      }
    }
  
    
    while (j >= 0) {
      arr1[k--] = arr2[j--];
    }
  
    return arr1;
  }
  
  
  
  
  console.log(result); 
  