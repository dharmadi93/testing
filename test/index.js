const mocha = require('mocha')
const expect = require('chai').expect
const lib = require('../lib/lib')

describe("Test isEmpty", () => {
    it("returns true if cater is empty", () => {
        expect(lib.isEmpty([])).to.be.true
    })
})