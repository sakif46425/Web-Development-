// let numbers = [1,2,2,3,4,4,4,5];
// let count = {};


// for (let i =0; i < numbers.length; i++)
// {
//     let num = numbers[i];
//     if (count[num])
//     {
//         count[num]++;

//     }
//     else 
//     {
//         count[num] = 1;
//     }
// }

// console.log(count);



let numbers = [5,6,11,12,98,5];
let find = 5;
let count = 0;

for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i] === find)
    {
        count++;
    }
}


console.log(count);