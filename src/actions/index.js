import { ActionTypes } from '../constants';
import {
    setStorageItem,
    removeStorageItems,
    emptyAllStorageItems } from '../utilities';

export function setItemToClientStorage(state) {
  return { type: ActionTypes.SET_ITEM, state };
}

export function removeItemFromClientStorage(state) {
  return { type: ActionTypes.REMOVE_ITEM, state };
}

export function emptyAllItemsFromClientStorage() {
  return { type: ActionTypes.EMPTY_ALL };
}

/**
 * Set item to client-side storage and Redux state
 * @param  {String} key Storage Key
 * @param  {Any} value Storage Value
 */
export function setItem(key, value) {
  setStorageItem(key, value);

  return (dispatch) => {
    dispatch(setItemToClientStorage({ key, value }));
  };
}

/**
 * Remove item from client-side storage and Redux state
 * @param  {String} key Storage Key
 */
export function removeItem(key) {
  removeStorageItems(key);

  return (dispatch) => {
    dispatch(removeItemFromClientStorage(key));
  };
}

/**
 * Removes all items from client-side storage and Redux state
 */
export function emptyAllItems() {
  emptyAllStorageItems();

  return (dispatch) => {
    dispatch(emptyAllItemsFromClientStorage);
  };
}
