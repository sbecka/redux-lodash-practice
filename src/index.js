import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

// UI layer subscribe to the store
const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

// state = reducer(state, action); internal state of the store
// notify the subscribers

store.dispatch(bugAdded('Bug 1'));

// console.log(store.getState()); // [{description: "Bug1", id: 1, resolved: false}]

store.dispatch(bugResolved(1));

unsubscribe();

// store.dispatch(bugRemoved(1));

console.log(store.getState()); // []