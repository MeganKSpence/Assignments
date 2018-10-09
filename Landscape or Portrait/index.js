function isLandscape (width, height) {
  if (width == height) return 'Square';
  return (width > height) ? 'Landscape' : 'Portrait'; //Ternary Operator
}

let width = 200;
let height = 350;
console.log("the parameters of the display are:", height, width)
console.log("This display is", isLandscape (width, height));
