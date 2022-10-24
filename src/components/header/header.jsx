import './module.css';
import { CurrencyCouple } from '../currency-couple/currency-couple';
import { flagUkraine } from '../../assets';
import iconCurrency from '../../assets/exchange.svg';

const Header = ({ rates }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <img
          src={iconCurrency}
          alt="exchange"
          className='exchangeIcon'
        />
        <p>currency</p>
      </div>
      <div className='rateCouples'>
        {rates.map(rate => <CurrencyCouple rate={rate} key={rate.ccy} />)}
      </div>
      <div className='flag'>
        <img src={flagUkraine} width='60px' alt='Ukraine' />
      </div>
    </header>
  )
};

export { Header };