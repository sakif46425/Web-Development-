function odd_even(number)
{
    if (number % 2 === 0)
    {
        return "Even";
    } else {
        return "Odd";
    }

}

console.log(odd_even(10));
console.log(odd_even(15));
console.log(odd_even(0));