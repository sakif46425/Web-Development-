const str = "Bangladesh , Argentina , America Javascript"

let count = 0;

for (let i = 0; i < str.length; i++)
{
    if (str[i].toLowerCase() === 'a')
    {
        count++;
    }
}

console.log("Number of a or A is : ",count);