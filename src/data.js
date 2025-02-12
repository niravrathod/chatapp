module.exports = {
  data: TradeBlotterCDS()
};

function TradeBlotterCDS() {
  return [
      {
          "TradeId": "1",
          "TradeDate": "11/02/2016",
          "BuySell": "Sell",
          "Notional": "50000000",
          "Coupon": "500",
          "Currency": "EUR",
          "ReferenceEntity": "Linde Aktiengesellschaft",
          "Ticker": "LINDE",
          "ShortName": "Linde AG",
          "Counterparty": "MUFJ",
          "MaturityDate": "20/03/2023",
          "EffectiveDate": "12/02/2016",
          "Tenor": "7",
          "RedEntityCode": "DI537C",
          "EntityCusip": "D50348",
          "EntityType": "Corp",
          "Jurisdiction": "Germany",
          "Sector": "Basic Materials",
          "Trader": "Yael Rich",
          "Status": "Pending"
      }
      // ... other rows of data 
  ]
}