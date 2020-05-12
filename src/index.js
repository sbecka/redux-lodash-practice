import { compose, pipe } from 'lodash/fp';

let input = ' JS ';
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrap = type => str => `<${type}>${str}</${type}>`; // currying
// const result = wrapInDiv(toLowerCase(trim(input)));

// compose is higher order function
// const transform = compose(wrapInDiv, toLowerCase, trim);

// pipe helps read left to right, input of left goes to the right and so on
const transform = pipe(trim, toLowerCase, wrap('div')); // <div>js</div>

console.log(transform(input));
