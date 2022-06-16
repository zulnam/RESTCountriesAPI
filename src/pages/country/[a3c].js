import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Details from '../../components/CountryPage/Details';
import ListContainer from '../../components/CountryPage/ListContainer';
import BorderCountries from '../../components/CountryPage/ BorderCountries';
import CountryTitle from '../../components/CountryPage/CountryTitle';
import CountryPageContainer from '../../components/CountryPage/CountryPageContainer';
import LeftArrowIcon from '../../components/CountryPage/LeftArrowIcon';
import ImageContainer from '../../components/CountryPage/ImageContainer';
import LeftArrowSVG from '../../components/Icons/LeftArrow';

const Country = () => {
  const ref = React.createRef();
  const router = useRouter();
  const { a3c } = router.query;

  const countries = useSelector((state) => state.countries.rawCountries);
  const darkMode = useSelector((state) => state.user.darkMode);

  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //filter all countries to get data for border countries
  const findCountryName = useCallback(() => {
    country.borders.forEach((neighbour) => {
      if (borderCountries.find((entry) => entry.alpha3Code === neighbour)) {
        return;
      }

      const neighbourData = countries.find(
        (country) => country.alpha3Code === neighbour
      );
      setBorderCountries((existingData) => [
        ...existingData,
        {
          alpha3Code: neighbour,
          name: neighbourData.name,
        },
      ]);
    });
  }, [borderCountries, countries, country]);

  //get loaded country data from store
  useEffect(() => {
    setBorderCountries([]);
    var findCountry = countries.find((country) => country.alpha3Code === a3c);
    setCountry(findCountry);
  }, [a3c, countries]);

  //get border countries data
  useEffect(() => {
    if (country) {
      setIsLoading(false);
      if (country.borders) {
        findCountryName();
      }
    }
  }, [country, findCountryName]);

  return (
    <CountryPageContainer
      className={darkMode ? 'dark-theme-body' : 'light-theme-body'}
    >
      <PrimaryButton
        className={
          darkMode
            ? 'dark-theme-header dark-box-shadow'
            : 'light-theme-header light-box-shadow'
        }
        dataCy="back-button"
        width="136"
        height="40"
        onClick={() => {
          router.back();
        }}
      >
        <LeftArrowIcon darkMode={darkMode}>
          <LeftArrowSVG />
        </LeftArrowIcon>
        Back
      </PrimaryButton>
      {!isLoading ? (
        <Details>
          <ImageContainer>
            <Image
              src={country.flag}
              alt="Image of the country flag"
              layout="fill"
              data-cy="country-image"
            />
          </ImageContainer>
          <article>
            <CountryTitle>{country.name}</CountryTitle>
            <ListContainer>
              <ul>
                <li>
                  <strong>Native Name: </strong>
                  {country.nativeName ? country.nativeName : 'N/A'}
                </li>
                <li>
                  <strong>Population: </strong>
                  {country.population
                    ? country.population.toLocaleString()
                    : 'N/A'}
                </li>
                <li>
                  <strong>Region: </strong>
                  {country.region ? country.region : 'N/A'}
                </li>
                <li>
                  <strong>Sub Region: </strong>
                  {country.subregion ? country.subregion : 'N/A'}
                </li>
                <li>
                  <strong>Capital: </strong>
                  {country.capital ? country.capital : 'N/A'}
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Top Level Domain: </strong>
                  {country.topLevelDomain
                    ? country.topLevelDomain.join(', ')
                    : 'N/A'}
                </li>
                <li>
                  <strong>Currencies: </strong>
                  {country.currencies
                    ? country.currencies.map((entry) => entry.code).join(', ')
                    : 'N/A'}
                </li>
                <li>
                  <strong>Languages: </strong>
                  {country.languages
                    ? country.languages.map((entry) => entry.name).join(', ')
                    : 'N/A'}
                </li>
              </ul>
            </ListContainer>
            <BorderCountries>
              <strong>Border Countries: </strong>
              {borderCountries.length ? (
                <div data-cy="border-countries">
                  {borderCountries.map((country, key) => (
                    <Link
                      key={`${country.alpha3Code}+${key}`}
                      href={`/country/${country.alpha3Code}`}
                    >
                      <PrimaryButton
                        className={
                          darkMode
                            ? 'dark-theme-header dark-box-shadow'
                            : 'light-theme-header light-box-shadow'
                        }
                        width={100}
                        height={36}
                        fontSize={country.name.length > 15 ? 0.6 : 0.9}
                        onClick={() => setBorderCountries([])}
                        ref={ref}
                      >
                        {country.name}
                      </PrimaryButton>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No neighbouring countries.</p>
              )}
            </BorderCountries>
          </article>
        </Details>
      ) : (
        <>Loading...</>
      )}
    </CountryPageContainer>
  );
};

export default Country;
