const { it, expect } = require("@jest/globals")
const { main } = require('./Main')


describe('StringCalc called from CMD-Window', () => {
    it('main Test should be sucessful', () => {
        let mockConsoleLog = jest.fn()
        let processMock = {
            argv: ['node', 'sum', '1,2,3']
        }
        main(mockConsoleLog, processMock)
        expect(mockConsoleLog.mock.calls[0][0]).toBe(6)
    })




})
