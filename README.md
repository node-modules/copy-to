copy-to
=======

copy an object's properties to another one

## Install

```
npm install copy-to
```

## Usage

```
copy(src).to(des);
copy(src).toCover(des);
copy(src).override(des);
copy(src).and(other).to(des);
copy(src).and(other).toCover(des);
copy(src).and(second).and(third).to(des);
```

## Example

```js
var copy = require('copy-to');

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

copy(src).to(des);
copy(src).toCover(des);
```

## License
MIT
