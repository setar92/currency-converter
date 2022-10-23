import './module.css';
import { CurrencyIcon } from '../../assets/currency-icon';
import { CurrencyCouple } from '../currency-couple/currency-couple';

const Header = ({ rates }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <CurrencyIcon fill='#a38f1f' />
        <p>currency</p>
      </div>
      <div>
        {rates.map(rate => <CurrencyCouple rate={rate} key={rate.ccy}/>)}
      </div>
      <div>profile</div>
    </header>
  )
};

export { Header };