const getRates = async (url, loading, serError) => {
  try {
      loading(true);
      const response = await fetch(url);
      const rates = await response.json();
      return rates;
  } catch (error) {
    serError(error.message)
  } finally {
    loading(false);
  }
};

export { getRates };