console.log("**Write a function to sort an array without using built-in methods**")


let unsortedArray = [5, 3, 8, 4, 2];
  let sortedArray = bubbleSort(unsortedArray);
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    
    do {
      swapped = false; 
      for (let i = 0; i < n - 1; i++) {
        
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true; 
        }
      }
      n--; 
    } while (swapped);
  
    return arr;
  }
  
  
  
  console.log(sortedArray);
  