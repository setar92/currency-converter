import { useState } from 'react';
import './module.css';
import { BASE_CURRENCY } from '../../common/constants';
import { convertCurrency } from '../../helpers/convert-currency';
import { arrowsIcon } from '../../assets';

const Converter = ({ rates }) => {
  const [giveCurrency, setGiveCurrency] = useState({ ccy: BASE_CURRENCY, count: 0 });
  const [getCurrency, setGetCurrency] = useState({ ccy: BASE_CURRENCY, count: 0 });

  const handleClickArrows = () => {
    const { ccy } = giveCurrency;
    const get = getCurrency;
    setGiveCurrency({ ...get });
    const count = convertCurrency({
      ccyGive: get.ccy,
      ccyGet: ccy,
      count: get.count,
      rates,
      isItGive: true,
    });
    setGetCurrency({ ccy, count });
  };

  const handleChangeGive = (e) => {
    if (e.target.value < 0) {
      setGiveCurrency({ ...giveCurrency, count: 0 });
      setGetCurrency({ ...getCurrency, count: 0 });
    } else {
      setGiveCurrency({
        ...giveCurrency,
        count: e.target.value,
      });
      setGetCurrency({
        ...getCurrency,
        count: convertCurrency({
          ccyGive: giveCurrency.ccy,
          ccyGet: getCurrency.ccy,
          count: Number(e.target.value),
          rates,
          isItGive: true,
        })
      });
    };
  };

  const handleChangeGet = (e) => {
    if (e.target.value < 0) {
      setGiveCurrency({ ...giveCurrency, count: 0 });
      setGetCurrency({ ...getCurrency, count: 0 });
    } else {
      setGetCurrency({
        ...getCurrency,
        count: e.target.value,
      });
      setGiveCurrency({
        ...giveCurrency,
        count: convertCurrency({
          ccyGive: giveCurrency.ccy,
          ccyGet: getCurrency.ccy,
          count: Number(e.target.value),
          rates,
          isItGive: false,
        })
      });
    };
  };

  const handleChangeCcyGive = (e) => {
    setGiveCurrency({
      ...giveCurrency,
      ccy: e.target.value
    });
    setGetCurrency({
      ...getCurrency,
      count: convertCurrency({
        ccyGive: e.target.value,
        ccyGet: getCurrency.ccy,
        count: Number(giveCurrency.count),
        rates,
        isItGive: true,
      })
    });
  };

  const handleChangeCcyGet = (e) => {
    setGetCurrency({
      ...getCurrency,
      ccy: e.target.value
    });
    setGiveCurrency({
      ...giveCurrency,
      count: convertCurrency({
        ccyGive: giveCurrency.ccy,
        ccyGet: e.target.value,
        count: Number(getCurrency.count),
        rates,
        isItGive: false,
      })
    });
  };

  return (
    <div className='container'>
      <div className='converter'>
        <div className='give-currency'>
          <span className='title'>You will give</span>
          <div className='count-field'>
            <input
              type="number"
              value={giveCurrency.count}
              onChange={e => handleChangeGive(e)}
            />
            <select
              value={giveCurrency.ccy}
              onChange={e => handleChangeCcyGive(e)}>
              <option value={BASE_CURRENCY}>{BASE_CURRENCY}</option>
              {rates.map(rate =>
                <option
                  value={rate.ccy}
                  key={rate.ccy}>
                  {rate.ccy}
                </option>)}
            </select>
          </div>
        </div>
        <div className='arrows'>
          <img onClick={handleClickArrows} src={arrowsIcon} alt="arrows" />
        </div>
        <div className='get-currency'>
          <span className='title'>You will get</span>
          <div className='count-field'>
            <select
              value={getCurrency.ccy}
              onChange={e => handleChangeCcyGet(e)}>
              <option value={BASE_CURRENCY}>{BASE_CURRENCY}</option>
              {rates.map(rate =>
                <option
                  key={rate.ccy}
                  value={rate.ccy}>
                  {rate.ccy}
                </option>)
              }
            </select>
            <input
              type="number"
              value={getCurrency.count}
              onChange={e => handleChangeGet(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Converter };