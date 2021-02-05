const { it, expect, } = require("@jest/globals")

const { stringCalc } = require('./sum')

describe('StringCalc', () => {
    it('should evaluate "" to  " "', () => {
        const sum = stringCalc(' ')
        expect(sum).toBe(0)
    })
    it('should evaluate "2" to  "2" ', () => {

        const sum = stringCalc('2')
        expect(sum).toBe(2)
    })
    it('should evaluate "1,2" to  "3" ', () => {
        const sum = stringCalc('1,2')
        expect(sum).toBe(3)
    })
    it('should evaluate "1,2,3" to  "6" ', () => {
        const sum = stringCalc('1,2,3')
        expect(sum).toBe(6)
    })
    it('should evaluate "1,2 \n3" to  "6" ', () => {
        const sum = stringCalc('1,2\n3')
        expect(sum).toBe(6)
    })
    it('should evaluate "1,2,\n3" to  "6" ', () => {
        const sum = stringCalc('1,2,\n 3')
        expect(sum).toBe(6)
    })
    it('should evaluate "//;\n1;2;3;4" to  "10" ', () => {
        const sum = stringCalc('//;\n1;2;3;4')
        expect(sum).toBe(10)
    })
})