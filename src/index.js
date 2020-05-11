import { compose, pipe } from 'lodash/fp';

let input = ' JS ';
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`;
// const result = wrapInDiv(toLowerCase(trim(input)));

// compose is higher order function
// const transform = compose(wrapInDiv, toLowerCase, trim);

// pipe helps read left to right
const transform = pipe(trim, toLowerCase, wrapInDiv);

transform(input);
