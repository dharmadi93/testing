
module.exports = {
    // 1
    isEmpty: function (data) {
        if (data.length == 0) return true
        else return false
    },

//    2
    moreThanFour: function (data) {
        string = data.split("")
        if (string.length > 4) return true
        else return false
    },

    // 3
    isNumber: function (data) {
        if (isNaN(data) == false) return true
        else return false
    },

}