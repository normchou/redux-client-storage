/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import { keys, assign, omit } from 'lodash';
import { getStorageItems } from '../utilities';
import { ActionTypes } from '../constants';

let initialState = {};

function buildInitialState(...items) {
  const store = getStorageItems(...items);

  return keys(store).length === 0 ? {} : store;
}

export function buildClientStateReducer(...items) {
  initialState = buildInitialState(...items);
}

export function getClientState(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_ITEM:
      state = assign({}, state, { [action.state.item]: action.state.value });
      break;

    case ActionTypes.REMOVE_ITEM:
      state = omit(state, action.state);
      break;

    case ActionTypes.EMPTY_ALL:
      state = {};
      break;
  }

  return state;
}
