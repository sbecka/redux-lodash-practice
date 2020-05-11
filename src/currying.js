function add(a) {
    return function(b) {
        return a + b;
    };
}

const add2 = a => b => a + b; // (a, b) => a + b

// const add1 = add(1);
// add1(5);
add(1)(5); // add(1, 5);

// N any number of args => 1 arguement