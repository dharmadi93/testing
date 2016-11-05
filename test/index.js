const mocha = require('mocha')
const expect = require('chai').expect
const lib = require('../lib/lib')

// 1 IS EMPT
describe("Test isEmpty", () => {
    it("returns true if string is empty", () => {
        expect(lib.isEmpty([])).to.be.true
    })
})

// 2 MROE THAN FOUR
describe("Test MoreThanFour", () => {
    it("returns true if string is more than four", () => {
        expect(lib.moreThanFour("testing")).to.be.true
    })
})

// IS NUMBER
describe("Test isNumber", () => {
    it("returns true if all numbers", () => {
        expect(lib.isNumber("21312")).to.be.true
    })
})

// IS EMAIL
describe("Test isEmail", () => {
    it("returns true if email format corret", () => {
        expect(lib.isEmail("dharmadi93@gmail.com")).to.be.true
    })
})