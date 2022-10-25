import { BASE_CURRENCY } from '../common/constants';

const getRate = (ccy, type, rates) => {
  const currentRate = rates.find(rate => rate.ccy === ccy);
  switch (type) {
    case 'buy': return currentRate.buy;
    case 'sale': return currentRate.sale;
    default: return null;
  };
};

const crossRate = (ccyGive, ccyGet, rates, isGiveCurrency) => {
  if (isGiveCurrency) {
    const giveCurrencyBaseRate = getRate(ccyGive, 'buy', rates);
    const getCurrencyBaseRate = getRate(ccyGet, 'sale', rates);
    return giveCurrencyBaseRate / getCurrencyBaseRate;
  } else {
    const giveCurrencyBaseRate = getRate(ccyGive, 'buy', rates);
    const getCurrencyBaseRate = getRate(ccyGet, 'sale', rates);
    return getCurrencyBaseRate / giveCurrencyBaseRate;
  };
};

const convertCurrency = ({ ccyGive, ccyGet, count, rates, isItGive }) => {
  if (ccyGive === ccyGet) {
    return count;
  } else if (ccyGet === BASE_CURRENCY) {
    if (isItGive) return getRate(ccyGive, 'buy', rates) * count;
    return count / getRate(ccyGive, 'buy', rates);
  } else if (ccyGive === BASE_CURRENCY) {
    if (isItGive) return count / getRate(ccyGet, 'sale', rates);
    return getRate(ccyGet, 'sale', rates) * count;
  } else {
    if (isItGive) return crossRate(ccyGive, ccyGet, rates, isItGive) * count;
    return crossRate(ccyGive, ccyGet, rates, isItGive) * count;
  };
};

export { convertCurrency };