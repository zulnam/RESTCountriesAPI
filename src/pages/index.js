import { useEffect, useState } from 'react';
import { getCountries } from './api/hello';
import { useDispatch, useSelector } from 'react-redux';
import { setRawCountries } from '../store/reducers/countries/countriesReducer';

import CountriesGrid from '../components/Countries/CountriesGrid';
import Filters from '../components/Filters/Filters';

const Home = () => {
  return (
    <>
      <Filters />
      <CountriesGrid />
    </>
  );
};

export default Home;
