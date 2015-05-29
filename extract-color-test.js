// added from ntg81
var should = require('should');
var extractColor = require('./extract-color.js');
var mocha = require('mocha');

describe('#extractColor', function() {
  describe('teal', function() {
    it('should return teal #1', function(){
      extractColor('a@b.com teal!').should.equal('teal');
    });

    it('should return teal #2 ', function(){
      extractColor('teal a@b.com!').should.equal('teal');
    });

    it('should return teal #3', function(){
      extractColor('teal!').should.equal('teal');
    });

    it('should return teal #4', function(){
      extractColor(' red@a.com teal red@b.com!').should.equal('teal');
    });

    it('should return teal #5', function(){
      extractColor(' white@a.com TeAl black@b.com!').should.equal('teal');
    });

    it('should return teal when comment has hashtag', function(){
      extractColor(' teal #red').should.equal('teal');
    });

    it('should return teal when comment has hastag #2', function(){
      extractColor('#red teal').should.equal('teal');
    });

    it('should return teal when comment has tag', function(){
      extractColor('@teal teal').should.equal('teal');
    });

    it('should return teal #5', function(){
      extractColor(' red@a.com Teal black@b.com!').should.equal('teal');
    });

    it('should return teal when given turquoise', function() {
      extractColor(' red@a.com turquoise blue@b.com!').should.equal('teal');      
    });

    it('should return teal when given torquoise', function() {
      extractColor(' red@a.com torquoise blue@b.com!').should.equal('teal');      
    });

    it('should return teal when given blue', function() {
      extractColor(' red@a.com blue').should.equal('teal');      
    });
  });

  describe('red', function() {
    it('should return red #1', function(){
      extractColor('a@b.com red!').should.equal('red');
    });

    it('should return red when comment has hashtag', function(){
      extractColor('#teal red').should.equal('red');
    });

  });

  describe('black', function() {
    it('should return black #1', function(){
      extractColor('a@b.com black!').should.equal('black');
    });

    it('should return black #2 ', function(){
      extractColor('black a@b.com!').should.equal('black');
    });

    it('should return black #3', function(){
      extractColor('black!').should.equal('black');
    });

    it('should return black #4', function(){
      extractColor(' black@a.com black black@b.com!').should.equal('black');
    });
  });

  describe('green', function() {
    it('should return green #1', function(){
      extractColor('a@b.com green!').should.equal('green');
    });
  });

  describe('pink', function() {
    it('should return pink #1', function(){
      extractColor('a@b.com pink!').should.equal('pink');
    });
  });

  describe('white', function() {
    it('should return black #1', function(){
      extractColor('a@b.com black!').should.equal('black');
    });

    it('should return black #2 ', function(){
      extractColor('black a@b.com!').should.equal('black');
    });

    it('should return black #3', function(){
      extractColor('black!').should.equal('black');
    });

    it('should return black #4', function(){
      extractColor(' black@a.com black black@b.com!').should.equal('black');
    });
  });

  describe('failures', function() {
    it('should return null if no color found #1', function(){
      should.not.exist(extractColor('this is nice'));
    });

    it('should return null if no color found #2', function(){
      should.not.exist(extractColor(''));
    });

    it('should return null if no color found #3', function(){
      should.not.exist(extractColor('teal@a.com'));        
    });

    it('should return null if no color found #4', function(){
      should.not.exist(extractColor('teal@a.com teal@b.com'));        
    });

    it('should return null if no color found #5', function(){
      should.not.exist(extractColor('#teal'));
    });

    it('should return null if no color found #6', function(){
      should.not.exist(extractColor('@teal'));
    });

  });

});
