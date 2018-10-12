let speed = 20;

const speedLimit = 70;
let kmPerPoint = 5;

  if (speed <= 70) console.log("ok")

  let demerits = Math.floor((speed - speedLimit) / kmPerPoint);
  if (demerits > 11) console.log("license suspended");
  if (demerits <= 11 && demerits > 0) console.log("You are going", speed, "km an hour.", "You have", demerits, "demerit points.")
