import {divide} from "../src/calculator.js";

describe('divide',()=>{
    it('divides two positive numbers',()=>{
        expect(divide(2,4)).toBe(0.5);
    });
    it('throws error when input is something other than a number',()=>{
        expect(()=>divide('kaksi',3)).toThrow('Both arguments must be numbers');
    });
    it('throws error when input is missing',()=>{
        expect(()=>divide(2)).toThrow('Both arguments must be numbers');
    });
    it('throws error when input is NaN',()=>{
        expect(()=>divide(2,NaN)).toThrow('Arguments cannot be NaN');
    });
    it('throws error when divisor is zero',()=>{
        expect(()=>divide(2,0)).toThrow('Division by zero is not allowed');
    });
});