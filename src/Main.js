const { stringCalc } = require("./sum")


module.exports = {
    main: function (log, processObj) {

        for (let i = 2; i < processObj.argv.length; i++) {
            log(stringCalc(processObj.argv[i]))

        }
    }
}


