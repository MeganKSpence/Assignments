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

for (i=0; i<=difference; i++);
  arrays = (number[0]+i) % 2;
    if (arrays === 0){
      console.log(arrays);
}

//  console.log((even = 1) ? "This number is odd" : "This number is even");
// console.log("This number is", even, "; This iteration is number", i+skipcount);

//for (let i=0; i<=difference; i++){
//  even = (startingnumber += skipcount) % 2;
//  if (even === 0){
//    let evenArray = [];
//      evenArray = new Array(20);
//        console.log(evenArray = [number[0]+i]);
//  }
//}
