console.log("For loop :");

for (let i = 1; i <= 100; i++)
{
    console.log(i);
    if (i > 1 && Math.sqrt(i) % 1 === 0)
    {
        break;
    }
}

console.log("While loop :");
let i = 1;
while (i <= 100)
{
    console.log(i);
    if (i > 1 && Math.sqrt(i) % 1 === 0)
    {
        break;
    }

    i++;
}