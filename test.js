test("One euro should be 1.206 dollars", function () {
    const { fromEuroToDollar } = require('./app.js')


    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("Dollar to Yen", function () {
    const { fromDollarToYen } = require('./app.js')


    expect(fromDollarToYen(2)).toBe(255.8); 
})


test("Yan to Pound", function () {
    const { fromYanToPound } = require('./app.js')


    expect(fromYanToPound(2)).toBe(1.6); 
})