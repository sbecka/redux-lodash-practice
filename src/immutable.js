import { Map } from 'immutable';

// immutability practice objects
const person = { name: 'John' };
const person2 = { 
    name: 'Jamie',
    address: {
        country: 'USA',
        city: 'San Francisco'
    } 
};

// shallow copy
const updated = Object.assign({}, person, { name: "Bob", age: 30 });
console.log(updated); // { name: "Bob", age: 30 }

// shallow copy
const updated2 = { ...person, name: 'Bob' };
console.log(updated2);

// shallow copy
const updated3 = { ...person, name: 'Barb' };
updated3.address.city = 'New York'; // reference still in memory to original object
console.log(person2);
// { 
//     name: 'Jamie',
//     address: {
//         country: 'USA',
//         city: 'New York'
//     } 
// };

// deeper copy
const updated4 = {
    ...person2,
    address: {
        ...person2.address,
        city: 'New York'
    },
    name: 'Karl'
};

console.log(updated4);

const numbers = [1, 2, 3];
// Adding
const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];

console.log(added); // [1, 4, 2, 3]

// Removing
const removed = numbers.filter(n => n !== 2);
console.log(removed);

// Updating
const update = numbers.map(n => n === 2 ? 20 : n);
console.log(update);

// learning Immutable library

// Map, hashmap data structure is immutable
let book = Map({ title: 'Harry Potter' });

function publish(book) {
    // set()
    // creates a new object
    return book.set('isPublished', true);
}

console.log(book.get('title')); // need to use get()
console.log(book.toJS()); // returns JS object { title: 'Harry Potter' }

book = publish(book); // reassign 
console.log(book.toJS()); // to equal { title: 'Harry Potter', isPublished: true }