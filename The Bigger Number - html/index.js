function biggerNumber (number1, number2){
  if (number1 === number2) return 'the numbers are the same';
  return (number1 > number2) ? (number1 + ' is the bigger number') : (number2 + ' is the bigger number');
}

let number1 = 3;
let number2 = 6;
console.log("the numbers are ", number1, " and ", number2)
console.log(biggerNumber (number1, number2));
