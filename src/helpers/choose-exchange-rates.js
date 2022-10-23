import { CURRENCYS } from '../common/constants';

// const rates = [
//   { ccy: 'USD', base_ccy: 'UAH', buy: '39.80000', sale: '40.30000' },
//   { ccy: 'EUR', base_ccy: 'UAH', buy: '37.80000', sale: '38.80000' },
//   { ccy: 'BTC', base_ccy: 'USD', buy: '18260.4716', sale: '20182.6266' }
// ];

const chooseRates = (rates) => {
  const choosedRates = [];
  CURRENCYS.forEach(ccy => {
    const exchangeRate = rates.find(rate => rate.ccy === ccy);
    if (exchangeRate !== -1) {
      choosedRates.push(exchangeRate)
    }
  })
  return choosedRates;
};

export { chooseRates };