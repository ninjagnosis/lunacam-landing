// Public prices are not set yet (the catalog only says paid plans are priced
// by camera count, retention days and AI features). Rows stay empty so
// /pricing shows plans, not a price table. When prices exist, add them here
// in Nepali rupees per month and the table appears.

export const rs = (n: number) => `Rs ${n.toLocaleString('en-IN')}`;

export interface Tier {
  name: string;
  /** Monthly price in rupees; absent means priced on request. */
  mrp?: number;
  from?: boolean;
  includes: string;
}

export interface PriceRow {
  product: string; // product slug
  tiers: Tier[];
  extra: string;
}

export const priceRows: PriceRow[] = [];
