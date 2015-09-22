
/**
 * @name is-object-really-empty
 * @description Check if an object literal is empty*. * Really empty.
 * @param {Any} obj: the subject of the test
 * @returns {Boolean} true if the parameter is an empty object literal.
 */
 
exports = module.exports = function isEmptyObject(obj){
  
  if (!obj || typeof obj != "object"){
    return false;
  }

  for (var prop in obj){
    return false;
  }

  if (typeof Symbol == 'function' && Object.getOwnPropertySymbols(obj).length){
    return false;
  }

  return Object.prototype.toString.call(obj) == "[object Object]";

};
