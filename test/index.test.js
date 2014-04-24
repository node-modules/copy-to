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
});