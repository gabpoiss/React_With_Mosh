import
Teacher, {
    promote
}
from './teacher'

// Default -> import ... from '';
// Named -> import {...} from '';

// Arrow Functions

// const square = number => number * number;
// console.log(square(5));

// const jobs = [{
//         id: 1,
//         isActive: true
//     },
//     {
//         id: 2,
//         isActive: true
//     }, {
//         id: 3,
//         isActive: false
//     }
// ];

// const activeJobs = jobs.filter(job => job.isActive);
// console.log(activeJobs);
// 

// Arrow functions and this
// const person = {
//     talk() {
//         setTimeout(function () {
//             console.log("this", this)
//         }, 1000);
//     }
// };

// person.talk();

//

// Array.map Method

// const colors = ["blue", "orange", "red"]

// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);

//Object Destructuring
// const address = {
//     street: '',
//     city: '',
//     country: ''
// };

// const street = address.street;
// const city = address.city;
// Destructuring solve this repetitive code

// ----->
// const {
//     street,
//     city,
//     country
// } = address;
//

// Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concad(second);

// This concad method is the same as the spread operators below.
// But with the spread operators you can add properties in betweem or besides them without being too complicated.

// const combined = [...first, 'a', ...second, 'b'];

// console.log(combined);
//

// Classes

// class Person {

//     constuctor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log("walk");
//     }

// }



// const person = new Person('Mosh');
// console.log(person.walk());

//

// Inheritance


const teacher = new Teacher('Mosh', "MS");
teacher.teach();
//