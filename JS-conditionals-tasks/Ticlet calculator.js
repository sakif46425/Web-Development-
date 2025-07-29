let age = 17;
let isStudent = true;

let fare = 500;

if (age < 10){
    fare = 0;
} 
else if (isStudent)
{
    fare = fare * 0.5;
}
else if (age >= 60)
{
    fare = fare * 0.85;
}

console.log("Your Ticket fare is :" + fare + "tk");