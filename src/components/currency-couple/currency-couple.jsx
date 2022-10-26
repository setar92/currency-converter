import './module.css';
import { BASE_CURRENCY } from '../../common/constants';

const CurrencyCouple = ({ rate }) => {

  return (
    <div className='currency-сouple'>
      <p>{rate.ccy}
        <span className='rightArrow'>{' → '}</span>
        {BASE_CURRENCY + ' '}
        <span className='rate'>{rate.buy + ' '}</span>
      </p>
      <p>{rate.ccy}
        <span className='rightArrow'>{' ← '}</span>
        {BASE_CURRENCY + ' '}
        <span className='rate'>{rate.sale}</span>
      </p>
    </div>
  );
};

export { CurrencyCouple };