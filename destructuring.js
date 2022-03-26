// JSON 
const student = {
    name: 'salib khan',
    age: '32',
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);

//2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

//keys, valus ; 
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys, values);

// for
const numbers = [23, 56, 78, 54, 76, 85, 46, 43];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);
