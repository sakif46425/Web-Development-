function count_zero(binaryString)
{
    let count = 0;
    for (let char of binaryString)
    {
        if (char === '0')
        {
            count++;
        }
    }

    return count;
}

console.log(count_zero("1001010100"));
console.log(count_zero("11111111"));