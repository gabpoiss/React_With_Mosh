import {
    Person
} from './person'
// We use those curly brace beside Person only to import the 'named exports'. If the exports is default exports, you don't need curly braces. 




// named exports = You can export multiple functions or classes to multiple other modules
// concept of dedault exports: 


export function promote() {};

export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}