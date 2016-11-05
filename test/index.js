const mocha = require('mocha')
const expect = require('chai').expect
const lib = require('../lib/lib')

describe("Test isEmpty", () => {
    it("returns true if string is empty", () => {
        expect(lib.isEmpty([])).to.be.true
    })
})

describe("Test MoreThanFour", () => {
    it("returns true if string is more than four", () => {
        expect(lib.moreThanFour("testing")).to.be.true
    })
})