'use strict';

var expect = require('chai').expect,
    latinScansion = require('../lib/latin-scansion');

// `expect` is from chai, which you can read about here: http://chaijs.com/api/bdd/
// `describe` and `it` are from mocha, which you can read about here: http://visionmedia.github.io/mocha/
describe('latin-scansion', function() {

    it('is true', function() {
        expect(true).to.be.true;
    });

    it('returns a string', function() {
       expect(latinScansion('apparent rari nantes in gurgite vasto')).to.be.a('string');
    });

    it('this is a pending test');

});