const mathOperations = require('../calculator');

describe("Calculator tests",()=>{
    test("add of 2 num",()=>{
        let result = mathOperations.sum(1,2)
        expect(result).toBeTruthy()
        expect(result).toBe(3)
    });
    test("Subtraction of 2 numbers", () => {
        // arrange and act
        let result = mathOperations.diff(10,2)
        
        // assert
        expect(result).toBe(8);
    });
        
    test("Multiplication of 2 numbers", () => {
        // arrange and act
        let result = mathOperations.product(2,8)
        
        // assert
        expect(result).toBe(16);
    });
        
    test("Division of 2 numbers", () => {
        // arrange and act
        let result = mathOperations.divide(24,8)
        
        // assert
        expect(result).toBe(3);
    });
})