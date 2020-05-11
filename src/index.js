import { compose, pipe } from 'lodash/fp';

let input = ' JS ';
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;

const result = wrapInDiv(trim(input));