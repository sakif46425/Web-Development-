let sum = 0;
let number = 1;

while (true) {
  sum += number;
  
  if (sum >= 100) {
    break;
  }
  
  number++;
}


console.log(`Stopped at number: ${number}, total sum: ${sum}`);