var copy = require('./');

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
console.log(des);
