



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

let fromDollarToYen = function (dollar) {
    return oneEuroIs["JPY"] * dollar
}
//console.log(fromDollarToYen())

let fromEuroToDollar = function (euros) {
    let totaldolar = oneEuroIs["USD"] * euros
    return totaldolar
}
//console.log(fromEuroToDollar());

let fromYanToPound = function (yenes) {
    return oneEuroIs["GBP"] * yenes
}
//console.log(fromYanToPound())


module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound }


