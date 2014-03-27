var copy = require('./');


/**
 * copy(src).to(des);
 * copy(src).toCover(des);
 */

var src = {
  _name: 'foo',
  set name(val) {
    this._name = val;
  },
  get name() {
    return this._name;
  },
  show: function () {
    console.log(this._name);
  }
};

var des = {
  _name: 'bar'
};

copy(src).toCover(des);


/**
 * copy(src).and(other).to(des);
 */

var a = {
  name: 'foo',
  show: function () {
    return this.name;
  }
};

var b = {
  name: 'bar',
  age: 18,
  showAge: function () {
    return this.age;
  }
};

var c = {};

copy(a).and(b).to(c);
