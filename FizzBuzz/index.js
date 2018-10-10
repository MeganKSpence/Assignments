let input = 5

function fizzBuzz (input) { //These match order of logic
  if ((input % 3 === 0 ) && (input % 5 === 0)) return "FizzBuzz. The input was " + input + ".";
  if (input % 3 === 0) return "Fizz. The input was " + input + ".";
  if (input % 5 === 0) return "Buzz. The input was " + input + ".";
  if (typeof input !=='number') return "This is not a number. The input was " + input + "."; //Change to NaN
  return "This test number is not divisable by 3 or 5. The input was " + input + ".";
}

console.log(fizzBuzz (input));
//not in order
//not complete and will not work
