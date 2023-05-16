import { Amount } from "./Amount";
import type { APIWallet } from "@tipccjs/tipcc-api-types/v0";
import { TipccClient } from "./TipccClient";
import { Currency } from "./Currency";
import { ExchangeRate } from "./ExchangeRate";

/**
 * A class for storing an API wallet.
 *
 * @category API Classes
 */
export class Wallet {
  /** The currency code */
  public code: string;

  /** The currency name */
  public name: string;

  /** The currency */
  public get currency(): Currency | null {
    const currency = this.client?.cryptos.get(this.code);
    return currency ? currency : null;
  }

  /** The exchange rate of this wallet's currency */
  public get exchangeRate(): ExchangeRate | null {
    const exchangeRate = this.client?.exchangeRates.get(this.code);
    return exchangeRate ? exchangeRate : null;
  }

  /** The balance of this wallet */
  public balance: Amount;

  /** The client that instantiated this */
  public client: TipccClient | undefined;

  /**
   * Create a Wallet.
   * @param payload The wallet from the API
   */
  constructor(payload: APIWallet, client?: TipccClient) {
    if (client && client instanceof TipccClient) this.client = client;
    this.code = payload.code;
    this.name = payload.name;
    this.balance = new Amount(payload.balance, this.client);
  }
}
