const { Bucket } = require( '../../src/utils/Bucket' );

describe('utils/Bucket Test Suite', function () {
  test('Can Test?', () => {
    expect(true).toBe(true);
  });
  test('Can Initialize Bucket .', () => {
    let testBucket = new Bucket(1);
    expect(testBucket).toBeInstanceOf(Bucket);
  });
});