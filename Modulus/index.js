let number = [17, 27];
let skipcount = 1;
let difference = number[1] - number[0]
let startingnumber = number[0];
for (let i=0; i<=difference; i++){
  even = (startingnumber += skipcount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipcount, "the number is: ", );
}
let points = even;
let type = points > 0 ? 'even' : 'odd'
console.log(type);
