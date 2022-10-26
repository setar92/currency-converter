import { useEffect, useState } from 'react';
import { Header, Loader, Converter, ErrorToast } from './components';
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
    return <Loader />
  };
  if (error) {
    return <ErrorToast message={error} />
  };
  return (
    <>
      <Header rates={rates} />
      <Converter rates={rates} />
    </>
  );
};

export default App;
