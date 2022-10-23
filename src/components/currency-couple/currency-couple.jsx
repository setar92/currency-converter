import './module.css';
import { BASE_CURRENCY } from '../../common/constants';

const CurrencyCouple = ({ rate }) => {

  return (
    <div className='currencyCouple'>
      <p>{rate.ccy}<span className='rightArrow'>{' → '}</span>{BASE_CURRENCY + ' '}</p>
      <p>{rate.ccy}<span className='rightArrow'>{' ← '}</span>{BASE_CURRENCY + ' '}</p>
    </div>
  );
};

export { CurrencyCouple };