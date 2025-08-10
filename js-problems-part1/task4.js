function findlongestword(str)
{
    let words = str.split(" ");
    let longestWord = " ";

    for (let word of words)
    {
        if (word.length > longestWord.length)
        {
            longestWord = word;
        }
    }

    return longestWord;
}
console.log(findlongestword("I am learning Programming to become a programmer"));
console.log(findlongestword("The quick brown fox jumps over the lazy dog"));
console.log(findlongestword("JavaScript is a versatile programming language"));