import './module.css';
import { CurrencyIcon } from '../../assets/currency-icon';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <CurrencyIcon fill='#a38f1f' />
        <p>currency</p>
      </div>
      <div>currency</div>
      <div>profile</div>
    </header>
  )
};

export { Header };