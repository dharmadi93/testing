
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

    // 4
    isEmail: function (data) {
        var regexPatt = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)

        if (regexPatt.test(data) == true) return true
        else return false
    },

//    5
    hardPassword: function (data) {
        var regexPatt = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\W]).+$/)

        if (regexPatt.test(data) == true) return true
        else return false
    },

//    6
    containStreet: function (data) {
        var temp = data.toLowerCase()
        if (temp.includes("street ") == true) return true
        else return false
    }

}