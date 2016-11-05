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

// 3 IS NUMBER
describe("Test isNumber", () => {
    it("returns true if all numbers", () => {
        expect(lib.isNumber("21312")).to.be.true
    })
})

// 4 IS EMAIL
describe("Test isEmail", () => {
    it("returns true if email format corret", () => {
        expect(lib.isEmail("dharmadi93@gmail.com")).to.be.true
    })
})

// 5 HARD PASSWORD MUST CONTAIN ONE CAPITAL LETTER, NUMBER, AND SYMBOL
describe("Test Hard Password", () => {
    it("returns true if password format corret", () => {
        expect(lib.hardPassword("@Testing1")).to.be.true
    })
})

// Contain Street
describe("Test Contain Street", () => {
    it("returns true if contain street", () => {
        expect(lib.containStreet("strEet apa")).to.be.true
    })
})