import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fetchData,readReadme } from '../src/util.js';

describe('Util Functions', () => {
  it('fetchData function', async () => {
    const data = await fetchData();
    assert.equal(data, 'async data');
  });

  it('readReadme function', async () => {
    const data = await readReadme();
    assert.ok(data.includes('package.json'));
  });
});
