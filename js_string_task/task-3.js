const str = "Education is the most powerful weapon which you can use to change the world.";

const lowerstr = str.toLowerCase();


const hasAllvowels = ['a', 'e', 'i', 'o', 'u'].every(vowel => lowerstr.includes(vowel));

if (hasAllvowels)
{
    console.log("The string contains all the vowels.");
} else 
{
    console.log("The string does not contain all the vowels. ");
}

