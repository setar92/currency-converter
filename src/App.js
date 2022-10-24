import { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { getRates } from './http/get-rates';
import { BASE_URL } from './common/constants';
import { chooseRates } from './helpers/choose-exchange-rates';

function App() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getRates(BASE_URL, setIsLoading, setError)
      .then(data => {
        const choosedRates = chooseRates(data);
        setRates(choosedRates);
      });
  }, []);

  if (isLoading) {
    return <div>isLoading</div>
  }
  if (error) {
    return <div>error</div>
  }
  return (
    <Header rates={rates} />
  );
};

export default App;
