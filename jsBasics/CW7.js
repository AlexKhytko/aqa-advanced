const isOdd = (n) => {
    return n % 2 !== 0;
  }
  
  let printMsg = (callback, num) => {
    const isNumOdd = callback(num);
    console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
  }
  
  // Pass in isEven as the callback function
  printMsg(isOdd, 4); 
  // Prints: The number 4 is an even number: True.

  function fetchData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  }
  
  fetchData('https://jsonplaceholder.typicode.com/todos/1', function(a1) {
    console.log(a1);
  });
  fetchData('https://jsonplaceholder.typicode.com/todos/2', function(a2) {
    console.log(a2);
  });
 
  const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => {
  return num * num;
});
const evenNumbers = numbers.filter(num => num % 2 === 0);
numbers.forEach(function(num) {
  console.log(num);
});