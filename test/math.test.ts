import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { add, multiply, } from '../src/math.js';

describe('Math Functions', () => {
    it('add function', () => {
        assert.equal(add(2, 3), 5);
        assert.equal(add(-1, 1), 0);
    });

    it('multiply function', () => {
        assert.equal(multiply(2, 3), 6);
        assert.equal(multiply(-1, 1), -1);
    })
});