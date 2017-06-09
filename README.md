Redux Client Storage
==============================

Redux solution to initializing the initial Redux state with information stored in the client-side storage (i.e. local storage).

## Installation

```
npm install --save redux-client-storage
```

## Usage

The first thing that you have to do is to give the `redux-client-storage` reducer to Redux.

```
import { createStore, combineReducers } from 'redux';
import { buildClientStateReducer } from 'redux-client-storage/reducers';

const clientStorageReducer = buildClientStateReducer('account', 'name')		// <---- Builds initial state with arguments passed

const reducers = {
  // ... your other reducers here ...
  clientStorage: clientStorageReducer     // <---- Mounted at Client Storage Reducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
```

Actions are exposed to update the `clientStorage` state. The actions that are available are:
- `setItem` - Sets item to client-side storage and Redux state.
- `removeItem` - Removes item from client-side storage and Redux state.
- `emptyAllItems` - Removes all items from client-side storage and Redux state.

To use one of the actions:
```
import { setItem } from 'redux-client-storage/actions';
```