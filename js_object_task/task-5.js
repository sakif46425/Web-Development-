let myObject = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isStudent: true
};


for(let key in myObject)
{
    let valueType = typeof myObject[key];
    console.log(`key: ${key} | type: ${valueType}`);
}