/**
 * Created by zwhu on 15/11/10.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("babel-polyfill");

var rangeArray = function rangeArray(begin, end) {
  return Array(end - begin + 1).fill(0).map(function (v, i) {
    return i + begin;
  });
};

/**
 *
 * @param args
 * @returns {Array}
 */

exports["default"] = function () {

  var range = Array.isArray(arguments[0]) ? Array.from(arguments[0]) : rangeArray(arguments[0], arguments[1]),
      random = [],
      N = range.length;

  while (N--) {
    var i = Math.random() * (N + 1) | 0;
    random.push(range[i]);
    range[i] = range[N];
  }
  return random;
};

module.exports = exports["default"];