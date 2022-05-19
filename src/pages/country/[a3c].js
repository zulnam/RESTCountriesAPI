import { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import theme from '../../styles/theme';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Details from '../../components/CountryPage/Details';
import ListContainer from '../../components/CountryPage/ListContainer';
import BorderCountries from '../../components/CountryPage/ BorderCountries';

const Country = () => {
  const router = useRouter();
  const { a3c } = router.query;
  const countries = useSelector((state) => state.countries.rawCountries);
  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    var findCountry = countries.find((country) => country.alpha3Code === a3c);
    setCountry(findCountry);
  }, [a3c, countries]);

  useEffect(() => {
    if (country) {
      setIsLoading(false);
      if (country.borders) {
        findCountryName();
      }
    }
  }, [country, findCountryName]);

  const IconContainer = styled.span`
    position: relative;
    top: 2px;
    margin-right: 1rem;
  `;

  const CountryPageContainer = styled.div`
    padding: 20px;

    @media (min-width: ${theme.breakpoints.md}) {
      padding: 32px;
    }
  `;

  const CountryTitle = styled.h2`
    margin-top: 20px;
    margin-bottom: 8px;
    font-size: 1.4rem;
  `;

  const ImageContainer = styled.span`
    position: relative;
    max-height: 220px;

    @media (min-width: ${theme.breakpoints.md}) {
      max-width: 560px;
      max-height: 400px;
    }
  `;

  return (
    <CountryPageContainer>
      <PrimaryButton
        dataCy="back-button"
        width="136"
        height="40"
        onClick={() => {
          router.back();
        }}
      >
        <IconContainer>
          <Image
            src="/arrow-left.svg"
            width={16}
            height={16}
            alt="Search Icon"
          />
        </IconContainer>
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
                  {country.nativeName}
                </li>
                <li>
                  <strong>Population: </strong>
                  {country.population.toLocaleString()}
                </li>
                <li>
                  <strong>Region: </strong>
                  {country.region}
                </li>
                <li>
                  <strong>Sub Region: </strong>
                  {country.subregion}
                </li>
                <li>
                  <strong>Capital: </strong>
                  {country.capital}
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Top Level Domain: </strong>
                  {country.topLevelDomain.join(', ')}
                </li>
                <li>
                  <strong>Currencies: </strong>
                  {country.currencies.map((entry) => entry.code).join(', ')}
                </li>
                <li>
                  <strong>Languages: </strong>
                  {country.languages.map((entry) => entry.name).join(', ')}
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
                        width={100}
                        height={36}
                        onClick={() => setBorderCountries([])}
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
