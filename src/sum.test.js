const { it, expect, } = require("@jest/globals")

const { stringCalc } = require('./sum')

describe('StringCalc', () => 
{
    it('should evaluate "" to  0', () => {
        const sum = stringCalc(' ')
        expect(sum).toBe(0)
    })

    it('should evaluate "2" to  2', () => {

        const sum = stringCalc('2')
        expect(sum).toBe(2)
    })

    it('should evaluate "1,2" to  3', () => {
        const sum = stringCalc('1,2')
        expect(sum).toBe(3)
    })

})