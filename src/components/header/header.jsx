import './module.css';
import { CurrencyCouple } from '../currency-couple/currency-couple';
import { flagUkraine, exchangeIcon } from '../../assets';

const Header = ({ rates }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <img
          src={exchangeIcon}
          alt="exchange"
          className='exchangeIcon'
        />
      </div>
      <div className='rateCouples'>
        {rates.map(rate => <CurrencyCouple rate={rate} key={rate.ccy} />)}
      </div>
      <div className='flag'>
        <img src={flagUkraine} alt='Ukraine' />
      </div>
    </header>
  )
};

export { Header };