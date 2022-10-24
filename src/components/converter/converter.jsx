import { useState } from 'react';
import './module.css';
import { BASE_CURRENCY } from '../../common/constants';

const Converter = ({ rates }) => {
  const [firstCurrency, setFirstCurrency] = useState({ ccy: '', count: null });
  const [secondCurrency, setSecondCurrency] = useState({ ccy: '', count: null });

  // const convertCurrency = () => {
  //   if (firstCurrency && secondCurrency) {
  //     if 
  //   }
  // }

  console.log(rates)
  return (
    <div className='converter'>
      give
      <input
        type="number"
        value={firstCurrency.ccy}
        onChange={e => setFirstCurrency({
          ...firstCurrency,
          count: Number(e.target.value)
        })}
      />
      <select>
        {rates.map(rate => <option value={rate.ccy}>{rate.ccy}</option>)}
        <option value={BASE_CURRENCY}>{BASE_CURRENCY}</option>
      </select>
      get
      <input
        type="number"
        value={secondCurrency.ccy}
        onChange={e => setSecondCurrency({
          ...secondCurrency,
          count: Number(e.target.value)
        })}
      />
      <select>
        {rates.map(rate => <option value={rate.ccy}>{rate.ccy}</option>)}
        <option value={BASE_CURRENCY}>{BASE_CURRENCY}</option>
      </select>
      <span></span>
    </div>
  );
};

export { Converter };