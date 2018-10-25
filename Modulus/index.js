let number = [19, 37];
console.log("The numbers being used are " + number[0] + " and " + number[1])
let skipcount = 1;
let difference = number[1] - number[0]
console.log("The two numbers are " + difference + " numbers appart");
let startingnumber = number[0];
for (let i=0; i<=difference; i++){
  even = (startingnumber += skipcount) % 2;
    if (even === 0){
     console.log("The number is ", number[0]+i , " and the number is odd");
    }
    else if (even === 1) {
      console.log("The number is ", number[0]+i, " and the number is even");
  }
}

console.log("evenArray") //note: Odd and Even Array do not Work Properly, Only Work when number[0] is even, I tried my best but could not figure it out
for (let i=0; i<=difference; i++){
  even = (startingnumber += skipcount) % 2;
    if (even === 0){
      "ignore"
    }
    else if (even === 1) {
      console.log(number[0]+i);
    }
}

console.log("oddArray")
for (let i=0; i<=difference; i++){
  even = (startingnumber += skipcount) % 2;
    if (even === 0){
      console.log(number[0]+i);
    }
    else if (even === 1) {
      "ignore"
    }
}

for(let i=number[0];i<=difference;i++)
{
if((i%2)!=0){
console.log(i)
}
}
