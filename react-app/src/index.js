import React from 'react';
import ReactDOM from 'react-dom';

// const element = < h1 > Hello World < /h1>;

{ /* ReactDOM.render(element, document.getElementById('root')); */ }


// Arrow Functions

const square = number => number * number;
console.log(square(5));

const jobs = [{
        id: 1,
        isActive: true
    },
    {
        id: 2,
        isActive: true
    }, {
        id: 3,
        isActive: false
    }
];

const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
// 

// Arrow functions and this
const person = {
    talk() {
        setTimeout(function () {
            console.log("this", this)
        }, 1000);
    }
};

person.talk();

//

// Array.map Method