function reverseArray(arr) {
    let reversedArr = [];
    
    
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]); 
    }
    
    return reversedArr;
}

let myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray)); 
