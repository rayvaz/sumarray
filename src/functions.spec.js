'use strict';

const expect = require('chai').expect;
const Functions = require('./functions')

describe('Functions module', () => {
  describe('sumArray', () => {
    it('should export a function', () => {
      expect(Functions.sumArray).to.be.a('function')
    })

    it('should return an empty Array if n <= 2', () => {
      const sumArray = Functions.sumArray(2);

      expect(sumArray.length).to.be.equals(0);
    })
  })

  describe('fibo', () => {
    it('should export a function', () => {
      expect(Functions.fibo).to.be.a('function')
    })

    it('should return 1 if n equal to 1', () => {
      const fiboResult = Functions.fibo(1)
      expect(fiboResult).to.be.equals(1)
    })

    it('should return 1 if n equal to 2', () => {
      const fiboResult = Functions.fibo(2)
      expect(fiboResult).to.be.equals(1)
    })
  })

  describe('G', () => {
    it('should export a function', () => {
      expect(Functions.G).to.be.a('function')
    })
  })
})