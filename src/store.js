import { createStore } from 'redux';
import reducer from './reducer';

// createStore is a higher order function
// take reducer function as arg
const store = createStore(reducer);

export default store;