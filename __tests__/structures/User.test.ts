const { User } = require("../../src/structures/User");

describe("structures/User Test Suite", function () {
  test("Can Test?", () => {
    expect(true).toBe(true);
  });
  test('Can Initialize User .', () => {
    const payload = {
      identifier: undefined,
      username: undefined,
      avatarUrl: undefined,
      service: undefined
    };
    let testUser = new User(payload);
    expect(testUser).toBeInstanceOf(User);
  });
});