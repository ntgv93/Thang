var mocha = require('mocha');
var extractEmail = require('./extract-email').extractEmail;
var should = require('should');

describe('#extractEmail', function() {

  it('should return valid email - #1', function() {
    extractEmail('Kristenjpoggensee@gmail.com Teal!')
      .should.equal('kristenjpoggensee@gmail.com');
  });

  it('should return valid email - #2', function() {
    extractEmail('kristenjpoggensee@gmail.uk.com Teal!')
      .should.equal('kristenjpoggensee@gmail.uk.com');
  });

  it('should return valid email - #3', function() {
    extractEmail('1kristenjpoggensee@gmail.com Teal!')
      .should.equal('1kristenjpoggensee@gmail.com');
  });





  it('should return email if email in the middle', function() {
    extractEmail(' a@b.c Teal!').should.equal('a@b.c');
  });


  it('should return null if no email found - #1', function() {
    should.not.exist(extractEmail('Kristenjpoggenseeemail.com Teal!'));
  });

  it('should return null if no email found - #2', function() {
    should.not.exist(extractEmail('Kristenjpoggenseeemail@aol. Teal!'));
  });

  it('should return null if no email found - #3', function() {
    should.not.exist(extractEmail('Kristenjpoggenseeemail.com Teal!'));
  });

  it('should return null if no email found - #4', function() {
    should.not.exist(extractEmail('Kristenjpoggenseeemail.com Teal!'));
  });

  it('should return null if no email found - #4', function() {
    should.not.exist(extractEmail('.com Teal!'));
  });

  it('should return null if input is empty - #5', function() {
    should.not.exist(extractEmail(''));
  });



});
