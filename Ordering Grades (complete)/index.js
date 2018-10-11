const marks = [99,54, 27, 87, 95];
console.log ("My letter grade is", calculatedGrade (marks), "because my numerical average is", calculateAverage (marks));

function calculatedGrade (marks) {
  const average = calculateAverage (marks);
  if (average > 89) return 'A';
  if (average > 79) return 'B';
  if (average > 69) return 'C';
  if (average > 59) return 'D';
  return 'F';
}
function calculateAverage (marks) {
  let sum = 0;
  for (let mark of marks) sum += mark;
  return sum / marks.length;
}
