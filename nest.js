console.log("** Write a deep clone function to create a copy of a nested object or array without any reference to the original.**")

let original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling"],
    address: {
      city: "New York",
      zip: "10001",
    },
  };
  
function deepClone(value) {
    
    if (value === null || typeof value !== 'object') {
      return value;
    }
  
    
    if (Array.isArray(value)) {
      return value.map(deepClone);
    }
  
    
    const copy = {};
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        copy[key] = deepClone(value[key]);
      }
    }
  
    return copy;
  }
  
  
  
  const cloned = deepClone(original);
  
  console.log(cloned); 
  console.log(cloned === original); 
  console.log(cloned.address === original.address); 
  