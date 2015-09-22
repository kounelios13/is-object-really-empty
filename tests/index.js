
var test = require('tape');

var isEmptyObject = require('../index.js');

test('empty object', function(t) {

  // empty object

  t.equal(isEmptyObject({}), true);
  t.equal(isEmptyObject(new Object({})), true);

  // not empty object

  if (typeof Symbol == 'function'){
    var symbolicKey = Symbol('symbolicKey');
    var obj = {};
    obj[symbolicKey] = 42;

    t.equal(isEmptyObject(obj), false, 'symbol');
  }


  t.equal(isEmptyObject({ val: 42 }), false, 'not empty object');
  t.equal(isEmptyObject(null), false, 'null');
  t.equal(isEmptyObject(undefined), false, 'undefined');
  t.equal(isEmptyObject([]), false, 'empty array');
  t.equal(isEmptyObject(function() {}), false, 'noop function');
  t.equal(isEmptyObject(new Boolean()), false, 'new Boolean');
  t.equal(isEmptyObject(new Number()), false, 'new Number');
  t.equal(isEmptyObject(new String()), false, 'new String');

  function Person() {};
  Person.prototype.val = 42;

  t.equal(isEmptyObject(new Person()), false, 'empty instance with not empty prototype');

});