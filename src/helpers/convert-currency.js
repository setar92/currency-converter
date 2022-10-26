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
  count = Number(count);
  const signsAfterComa = 2;
  if (ccyGive === ccyGet) {
    return count.toFixed(signsAfterComa);
  } else if (ccyGet === BASE_CURRENCY) {
    if (isItGive) return (getRate(ccyGive, 'buy', rates) * count).toFixed(signsAfterComa);
    return (count / getRate(ccyGive, 'buy', rates)).toFixed(signsAfterComa);
  } else if (ccyGive === BASE_CURRENCY) {
    if (isItGive) return (count / getRate(ccyGet, 'sale', rates)).toFixed(signsAfterComa);
    return (getRate(ccyGet, 'sale', rates) * count).toFixed(signsAfterComa);
  } else {
    if (isItGive) return (crossRate(ccyGive, ccyGet, rates, isItGive) * count).toFixed(signsAfterComa);
    return (crossRate(ccyGive, ccyGet, rates, isItGive) * count).toFixed(signsAfterComa);
  };
};

export { convertCurrency };