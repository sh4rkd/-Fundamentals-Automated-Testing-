import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('getEvenNumbersFromArray', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    })

    afterEach(() => {
        validator = null;
    })

    it('should return an array of even numbers', () => {
        const arrayOfNumbers = [5, 2, 6, 11, 22];
        const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
        expect(evenNumbersArray).to.be.eql([2, 6, 22]);
    })

    it('should throw an error if array is not full of numbers', () => {
        const arrayOfValues = [5, '2', 11, 22];
        expect(() => {
            validator.getEvenNumbersFromArray(arrayOfValues);
        }).to.be.throw('[5,2,11,22] is not an array of "Numbers"');
    });

    it('should throw an error if is not an array', () => {
        const arrayOfNumbers = 'not an array';

        expect(() => {
            validator.isAllNumbers(arrayOfNumbers);
        }).to.throw('[not an array] is not an array'); 
    });
      
    it('should return true if every elements are numbers', () => {
        expect(validator.isAllNumbers([2,4,6,8])).to.be.equal(true);
    })
})