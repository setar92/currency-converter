import './module.css';
import { CurrencyCouple } from '../currency-couple/currency-couple';
import { flagUkraine, exchangeIcon } from '../../assets';
import { UKRAINE_URL, UKRAINE_UAH_URL } from '../../common/constants';

const Header = ({ rates }) => {
  const handleFlagClick = () => {
    window.open(UKRAINE_URL, '_blank');
  };

  const handleLogoClick = () => {
    window.open(UKRAINE_UAH_URL, '_blank');
  };

  return (
    <header className='header'>
      <div className='logo'>
        <img
          src={exchangeIcon}
          alt="exchange"
          className='exchangeIcon'
          onClick={handleLogoClick}
        />
      </div>
      <div className='rateCouples'>
        {rates.map(rate => <CurrencyCouple rate={rate} key={rate.ccy} />)}
      </div>
      <div className='flag'>
        <img
          src={flagUkraine}
          alt='Ukraine'
          onClick={handleFlagClick}
        />
      </div>
    </header>
  )
};

export { Header };