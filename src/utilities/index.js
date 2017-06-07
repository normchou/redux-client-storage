import store from 'store';
import { forEach, merge, reduce, isUndefined } from 'lodash';

/**
 * Set item to client-side storage
 * @param  {String} item Storage Key
 * @param  {Any} value Storage Value
 */
export function setStorageItem(item, value) {
  store.set(item, value);
}

/**
 * Get specified items from client-side storage
 * @param  {String} items Storage Keys
 */
export function getStorageItems(...items) {
  if (isUndefined(items[0][0])) {
    return {};
  }

  return reduce(items[0], (acc, item) => merge(acc, { [item]: store.get(item) }), {});
}

/**
 * Removes items from client-side storage
 * @param  {String} items Storage Keys
 */
export function removeStorageItems(...items) {
  if (!isUndefined(items[0][0])) {
    forEach(items, item => store.remove(item));
  }
}

/**
 * Removes all items from to client-side storage
 */
export function emptyAllStorageItems() {
  store.clearAll();
}
