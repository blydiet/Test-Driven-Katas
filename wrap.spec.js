const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });


  it('Returns same string if maxLen is false', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula", 0))
    .to.equal("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula");
  });

  it('If line length is less than or equal to maxLen, return same line', () => {
    let str = "Hello world";
    let len = str.length

    expect(wrap(str, len))
    .to.equal(str);
  })

});
