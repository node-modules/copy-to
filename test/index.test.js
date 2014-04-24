'use strict';

var copy = require('../');
var should = require('should');

describe('index.test.js', function() {
  var src = {
    _name: 'foo',
    set name(val) {
      this._name = val;
    },
    get name() {
      return this._name;
    },
    show: function() {
      return this._name;
    }
  };
  var sub = {
    info: 'copy'
  };

  it('copy to', function() {
    var des = {
      _name: 'bar'
    };

    copy(src).to(des);

    des._name.should.equal('bar');
    des.name.should.equal('bar');
    des.show().should.equal('bar');
  });

  it('copy toCover', function() {
    var des = {
      _name: 'bar'
    };

    copy(src).toCover(des);

    des._name.should.equal('foo');
    des.name.should.equal('foo');
    des.show().should.equal('foo');
  });

  it('copy and to', function() {
    var des = {
      _name: 'bar'
    };

    copy(src).and(sub).to(des);

    des._name.should.equal('bar');
    des.name.should.equal('bar');
    des.show().should.equal('bar');
    des.info.should.equal('copy');
  });

  it('copy and toCover', function() {
    var des = {
      _name: 'bar'
    };

    copy(src).and(sub).toCover(des);

    des._name.should.equal('foo');
    des.name.should.equal('foo');
    des.show().should.equal('foo');
    des.info.should.equal('copy');
  });

  var pickSrc = {
    _name: 'foo',
    set name(val) {
      this._name = val;
    },
    get name() {
      return this._name;
    },
    show: function() {
      return this._name;
    },
    _age: 123,
    set age(val) {
      this._age = val;
    },
    get age() {
      return this._age;
    },
    _sex: 'male',
    set sex(val) {
      this._sex = val;
    },
    get sex() {
      return this.sex;
    }
  };

  it('copy pick to', function() {
    var des = {
      _name: 'bar'
    };

    copy(pickSrc).pick('_name', 'name', 'show', '_age', 'age').to(des);

    des._name.should.equal('bar');
    des.name.should.equal('bar');
    des.show().should.equal('bar');
    des._age.should.equal(123);
    des.age.should.equal(123);
    should.not.exist(des._sex);
  });

  it('copy pick toCover', function() {
    var des = {
      _name: 'bar'
    };

    copy(pickSrc).pick('_name', 'name', 'show', '_age', 'age').toCover(des);

    des._name.should.equal('foo');
    des.name.should.equal('foo');
    des.show().should.equal('foo');
    des._age.should.equal(123);
    des.age.should.equal(123);
    should.not.exist(des._sex);
  });

  it('copy and pick to', function() {
    var des = {
      _name: 'bar'
    };

    copy(pickSrc).and(sub).pick('_name', 'name', 'show', '_age', 'age', 'info').to(des);

    des._name.should.equal('bar');
    des.name.should.equal('bar');
    des.show().should.equal('bar');
    des._age.should.equal(123);
    des.age.should.equal(123);
    should.not.exist(des._sex);
    des.info.should.equal('copy');
  });

  it('copy pick toCover', function() {
    var des = {
      _name: 'bar'
    };

    copy(pickSrc).and(sub).pick('_name', 'name', 'show', '_age', 'age', 'info').toCover(des);

    des._name.should.equal('foo');
    des.name.should.equal('foo');
    des.show().should.equal('foo');
    des._age.should.equal(123);
    des.age.should.equal(123);
    should.not.exist(des._sex);
    des.info.should.equal('copy');
  });
});
