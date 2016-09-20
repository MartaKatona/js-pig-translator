
const Chai = require('chai');
let Expect = Chai.expect;
const PigTranslator = require('../pigtranslator');

describe ('Pig translator is a Function', function(){
  it('Should exist',() => {
    Expect(PigTranslator).to.be.a('function')
  });
});
console.log('test of test', Chai);