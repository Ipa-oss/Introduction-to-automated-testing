import {add} from "../src/calculator.js";

describe('add',()=>{
    it('adds two positive numbers',()=>{
        expect(add(2,3)).toBe(5);
    });
    it('adds two negative numbers',()=>{
        expect(add(-2,-3)).toBe(-5)
    });
    it('throws error when input is not a number',()=>{
        expect(()=>add('kaksi',3)).toThrow('a or b is not a number.');
    });
});