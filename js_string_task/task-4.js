let str = "Example text with x  and X ";

if (str.includes('x') || str.includes('X')) 
{
    str = str.replace(/x/g, 'y').replace(/X/g, 'Y');
}

console.log(str); // Output: "Example text with y  and Y "