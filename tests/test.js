import {describe, it} from "mocha/lib/mocha";
import expect from "expect";

describe('Init tests', () => {
    it('Should return sum of two integers', () => {
        expect(1 + 2).toEqual(3);
    });
});