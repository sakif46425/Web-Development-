let weight = 80;
let height = 176;

let bmi = weight / (height*height);

console.log("your BMI is : ");


if (bmi < 18.5) {
  console.log("You are underweight.");
} else {
  if (bmi <= 24.9) {
    console.log("You are normal.");
  } else {
    if (bmi <= 29.9) {
      console.log("You are overweight.");
    } else {
      console.log("You are obese.");
    }
  }
}

