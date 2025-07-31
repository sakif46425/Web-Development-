
const books = ["JavaScript: The Good Parts", "Clean Code"];
const title = "JavaScript: The Definitive Guide";
const pageCount = 432;
const authors = { name: "David Flanagan" };
const published = true;
const editions = [6, 7, 8];
const publisher = null;


const variables = [
  { name: "books", value: books },
  { name: "title", value: title },
  { name: "pageCount", value: pageCount },
  { name: "authors", value: authors },
  { name: "published", value: published },
  { name: "editions", value: editions },
  { name: "publisher", value: publisher }
];

variables.forEach(variable => {
  if (Array.isArray(variable.value)) {
    console.log(`${variable.name} is an array.`);
  } else {
    console.log(`${variable.name} is NOT an array.`);
  }
});

