
// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }

// const double = arr => arr.map(val => val * 2);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

// function squareAndFindEvens(numbers) {
// return numbers.map(function(number){
//   return number ** 2;
//  }).filter(function(square){
//   return square % 2 === 0;
//  });
//  console.log(squareAndFindEvens(numbers))
// }
const squareAndFindEvens = numbers => (numbers.map(number => number ** 2)).filter(square => square % 2 === 0)


console.log(squareAndFindEvens(numbers));