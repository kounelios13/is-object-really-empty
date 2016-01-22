
/**
 *
 * @name is-object-really-empty.js
 * @version 2.0.0
 *
 * @description Check if an object literal is empty*. * Really empty. Returns true if the parameter is an empty object literal.
 *
 * @param {Any} obj: the subject of the test
 *
 * @example
 *
 * isEmptyObject({ }); // true
 * isEmptyObject({ foo: bar }); // false
 *
 */
export default function isEmptyObject(obj){

  if (!obj || typeof obj != 'object'){
    return false;
  }

  for (let prop in obj){
    return false;
  }

  if (typeof Symbol == 'function' && Object.getOwnPropertySymbols(obj).length){
    return false;
  }

  return Object.prototype.toString.call(obj) == '[object Object]';

}
