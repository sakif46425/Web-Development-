function countVowels(str)
{
    str = str.toLowerCase();

    let count = 0;
    let vowels = "aeiou";

    for (let char of str)
    {
        if (vowels.includes(char))
        {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));