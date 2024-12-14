const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 },
    { name: "Eve", age: 20 }
  ];
  
  
  const adults = people.filter(person => person.age >= 18);
  
  
  const adultNames = adults.map(person => person.name);
  
  console.log(adultNames);

  console.log("*****************return a new array************")

  function doubleNumbers(arr) {
    
    return arr.map(num => num * 2);
  }
  
 
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleNumbers(numbers);
  
  console.log(doubledNumbers); 
  
  