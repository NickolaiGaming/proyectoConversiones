test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("1.07 dollar should be 156.5 yen", function(){

const { fromDollarToYen } = require('./app.js');


expect(fromDollarToYen(1.07)).toBe(156.5);

})

test("156.5 yen should be 0.87 puund", function(){

    const { fromYenToPound } = require('./app.js');
    
    
    expect(fromYenToPound(156.5)).toBe(0.87);
    
    })