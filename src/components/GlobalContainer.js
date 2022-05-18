import { useEffect } from 'react';
import Head from 'next/head';
import { getCountries } from '../pages/api/hello';
import { useDispatch, useSelector } from 'react-redux';
import { setRawCountries } from '../store/reducers/countries/countriesReducer';
import Header from './Header';

const GlobalContainer = ({ children }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.rawCountries);

  useEffect(() => {
    if (!countries.length) {
      getCountries().then((res) => {
        dispatch(setRawCountries(res));
      });
    }
  }, [countries, dispatch]);

  return (
    <>
      <Head>
        <title>REST Countries</title>
        <meta
          name="description"
          content="Interactive and Educational list of countries"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default GlobalContainer;
