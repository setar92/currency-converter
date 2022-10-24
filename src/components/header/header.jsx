import './module.css';
import { CurrencyCouple } from '../currency-couple/currency-couple';
import { CurrencyIcon, flagUkraine } from '../../assets';

const Header = ({ rates }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <CurrencyIcon fill='#a38f1f' />
        <p>currency</p>
      </div>
      <div className='rateCouples'>
        {rates.map(rate => <CurrencyCouple rate={rate} key={rate.ccy} />)}
      </div>
      <div className='flag'>
        <img src={flagUkraine} width='100px' alt='Ukraine'></img>
      </div>
    </header>
  )
};

export { Header };