"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function objectIterator(obj) {

  var iterableObj = _defineProperty({}, Symbol.iterator, function () {
    var _this = this;

    var keys = Object.keys(this);
    var i = 0;

    return {
      next: function next() {
        return {
          value: _this[keys[i++]],
          done: i > keys.length
        };
      }
    };
  });

  return Object.assign(iterableObj, obj);
}

module.exports = objectIterator;
