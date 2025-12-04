// test-example.js
import test from 'node:test';
import assert from 'node:assert/strict';

test('sync test', (t) => {
    assert.equal(1 + 1, 2);
});

test('async test', async () => {
    const result = await Promise.resolve(42);
    assert.equal(result, 42);
});

test.describe('example', () => {
    test('add', () => {
        assert.equal(2 + 2, 4);
    });

    test('multiply', () => {
        assert.equal(3 * 3, 9);
    });
});
