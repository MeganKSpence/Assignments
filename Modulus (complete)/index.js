let number = [18, 37];
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

for(let i=number[0];i<=difference;i++)
{
if((i%2)!=0){
console.log(i)
  }
}
