const { CacheSet } = require( '../../src/utils/CacheSet' );

describe('utils/CacheSet Test Suite', function () {
  test('Can Test?', () => {
    expect(true).toBe(true);
  });
  test('Can Initialize CacheSet .', () => {
    let testCacheSet = new CacheSet(1);
    expect(testCacheSet).toBeInstanceOf(CacheSet);
  });
});
