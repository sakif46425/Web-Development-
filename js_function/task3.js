function make_avg (number,size)
{
    let sum = 0;
    for (let i = 0; i < size; i++)
    {
        sum += number[i];
    }

    return sum / size;
}

const str = [10,20,30,40,50];
const size = Array.length;
const average = make_avg(str, size);
console.log("Average: ", average);