/*!
 * copy-to - index.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * slice() reference.
 */

var slice = Array.prototype.slice;

/**
 * Expose copy
 *
 * ```
 * copy({foo: 'nar', hello: 'copy'}).to({hello: 'world'});
 * copy({foo: 'nar', hello: 'copy'}).toCover({hello: 'world'});
 * ```
 *
 * @param {Object} src
 * @return {Copy}
 */

module.exports = function (src) {
  return new Copy(src);
};

/**
 * Copy
 * @param {Object} src
 */

function Copy(src) {
  this.src = src;
}

/**
 * pick keys in src
 *
 * @api: public
 */

Copy.prototype.pick = function() {
  var keys = slice.call(arguments);
  if (keys.length) {
    this.keys = keys;
  }
  return this;
};

/**
 * copy src to target,
 * do not cover any property target has
 * @param {Object} to
 *
 * @api: public
 */

Copy.prototype.to = function(to) {
  to = to || {};
  var keys = this.keys || Object.keys(this.src);

  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (!notDefiend(to, key)) {
      continue;
    }
    var getter = this.src.__lookupGetter__(key);
    var setter = this.src.__lookupSetter__(key);
    if (getter) to.__defineGetter__(key, getter);
    if (setter) to.__defineSetter__(key, setter);

    if (!getter && !setter) {
      to[key] = this.src[key];
    }
  }
  return to;
};

/**
 * copy src to target,
 * do not cover any property target has
 * @param {Object} to
 *
 * @api: public
 */

Copy.prototype.toCover = function(to) {
  var keys = this.keys || Object.keys(this.src);

  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];    delete to[key];
    var getter = this.src.__lookupGetter__(key);
    var setter = this.src.__lookupSetter__(key);
    if (getter) to.__defineGetter__(key, getter);
    if (setter) to.__defineSetter__(key, setter);

    if (!getter && !setter) {
      to[key] = this.src[key];
    }
  }
};

Copy.prototype.override = Copy.prototype.toCover;

/**
 * append another object to src
 * @param {Obj} obj
 * @return {Copy}
 */

Copy.prototype.and = function (obj) {
  var src = {};
  this.to(src);
  this.src = obj;
  this.to(src);
  this.src = src;

  return this;
};

/**
 * check obj[key] if not defiend
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function notDefiend(obj, key) {
  return obj[key] === undefined
    && obj.__lookupGetter__(key) === undefined
    && obj.__lookupSetter__(key) === undefined;
}
