function make_avg (num)
{
    if (num % 2 === 0)
    {
        //console.log("Even number : ",num);
        return num / 2;
    }
    else
    {
        //console.log("Odd number : ",num);
        return num * 2;
    }
}

console.log(make_avg(20));
console.log(make_avg(15));