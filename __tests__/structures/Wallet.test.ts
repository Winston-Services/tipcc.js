const { Wallet } = require("../../src/structures/Wallet");
const { TipccClient } = require("../../src/structures/TipccClient");
const { Amount } = require("../../src/structures/Amount");
let payload = {
  code: "",
  name: "",
  balance: new Amount({
    value: null,
    currency: null
  }),
  usd_value: new Amount({
    value: null,
    currency: null
  })
};
describe("structures/Wallet Test Suite", function () {
  test("Can Test?", () => {
    expect(true).toBe(true);
  });
  test("Can Initialize Wallet.", () => {
    let client = undefined;
    let testWallet = new Wallet(payload, client);
    expect(testWallet).toBeInstanceOf(Wallet);
  });

  test("Currency returns null on undefined Wallet.", async () => {
    let client = undefined;
    let testWallet = new Wallet(payload, client);
    expect(testWallet).toBeInstanceOf(Wallet);
    expect(testWallet.currency).toBe(null);
  });

  test("Exchange Rate returns null on undefined Wallet.", async () => {
    let client = undefined;
    let testWallet = new Wallet(payload, client);
    expect(testWallet).toBeInstanceOf(Wallet);
    expect(testWallet.exchangeRate).toBe(null);
  });
});
