import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import CountryCard from './CountryCard';
import LoadingComponent from '../Loading/LoadingComponent';
import LoadingContainer from '../Loading/LoadingContainer';

const CountriesContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 264px);
  justify-content: center;
  gap: 4rem;
`;

const CountriesGrid = () => {
  const countries = useSelector((state) => state.countries.rawCountries);
  const darkMode = useSelector((state) => state.user.darkMode);
  const filteredCountries = useSelector(
    (state) => state.countries.filteredCountries
  );

  return (
    <CountriesContainer
      data-cy="countries-container"
      className={darkMode ? 'dark-theme-body' : 'light-theme-body'}
    >
      {countries.length === 0 && (
        <LoadingContainer>
          <LoadingComponent />
        </LoadingContainer>
      )}

      {filteredCountries.length
        ? filteredCountries.map((country) => (
            <CountryCard
              darkMode={darkMode}
              countryName={country.name}
              imageLink={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
              a3c={country.alpha3Code}
              key={country.alpha3Code}
            />
          ))
        : countries.map((country) => (
            <CountryCard
              darkMode={darkMode}
              countryName={country.name}
              imageLink={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
              a3c={country.alpha3Code}
              key={country.alpha3Code}
            />
          ))}
    </CountriesContainer>
  );
};

export default CountriesGrid;
