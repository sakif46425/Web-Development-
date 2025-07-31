const books = [
    "Eloquent javascript",
    "Javascript:The Good Part",
    "You don't know JS",
    "Clean Code",
    "Design Patterns"

];

const hasJavascriptBook = books.includes("Javascript:The Good Part");

if (hasJavascriptBook)
{
    console.log("The array contains a javascript book.");
} else {
    console.log("The array does not contain a javascript book. ");
}