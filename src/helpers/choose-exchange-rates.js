import { CURRENCYS } from '../common/constants';

const chooseRates = (rates) => {
  const choosedRates = [];
  CURRENCYS.forEach(ccy => {
    const exchangeRate = rates.find(rate => rate.ccy === ccy);
    if (exchangeRate !== -1) {
      choosedRates.push({
        ...exchangeRate, 
        buy: Number(exchangeRate.buy).toFixed(2),
        sale: Number(exchangeRate.sale).toFixed(2)
      });
    };
  });
  return choosedRates;
};

export { chooseRates };