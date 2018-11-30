// 1. Many, many arguments
const numbers = [a,b,c,d,e];

function product(...numbers) {

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// 2. Spread'in Arrays
function join(array1, array2) {
  return [...array1, ...array2];
}

//3. Mixing rest and spread
function unshift(array, ...rest) {
  return [...rest, ...array];
}
