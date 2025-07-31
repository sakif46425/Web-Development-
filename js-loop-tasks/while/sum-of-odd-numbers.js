let sumOdd = 0;
let num = 91;
while (num <= 129)
{
    if (num % 2 !== 0)
    {
        sumOdd += num;
    }

    num++;
}

console.log("Sum of odd numbers from 91 to 129 : ", sumOdd);

let sumEven = 0;
num = 51;
while (num <= 85)
{
    if (num % 2 === 0)
    {
        sumEven += num;
    }

    num++;
}

console.log("sum of even numbers from 51 to 85 : ", sumEven);

