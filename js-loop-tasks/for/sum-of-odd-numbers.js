// Subtask-1:Display sum of all the odd numbers from 91 to 129.

let sumOdd = 0;
for (let num = 91; num <= 129; num++)
{
    if (num % 2 !== 0)
    {
        sumOdd += num;
    }
}

console.log("sum of odd numbers from 91 to 129 : ", sumOdd);

// Subtask-2: Sum of all even numbers from 51 to 85

let sumEven = 0;
for (let num = 51; num <= 85; num++)
{
    if (num % 2 === 0)
    {
        sumEven += num;
    }
}

console.log("sum of even numbers from 51 to 85 : ", sumEven);

