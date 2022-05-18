import { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import PrimaryButton from '../../components/Buttons/PrimaryButton';

const Country = () => {
  const router = useRouter();
  const { a3c } = router.query;
  const countries = useSelector((state) => state.countries.rawCountries);
  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const findCountryName = useCallback(() => {
    if (country) {
      country.borders.forEach((neighbour) => {
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
    }
  }, [countries, country]);

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
    padding: 2rem;
  `;

  const CountryInfo = styled.article`
    h2 {
      margin-top: 2rem;
      margin-bottom: 0;
      font-size: 1.4rem;
    }
    img {
      width: 100%;
    }
    ul {
      margin-top: 1.8rem;
      letter-spacing: -0.015rem;
      list-style: none;
      font-size: 0.9rem;
      padding-left: 0;
      margin-right: 8rem;
      strong {
        font-weight: 600;
      }
      li {
        padding-bottom: 0.62rem;
      }
    }
  `;

  const Details = styled.main`
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0px 80px;
  `;

  const ListContainer = styled.div`
    display: inline-flex;
    margin-bottom: 1rem;
    width: 100%;
  `;

  const BorderCountries = styled.div`
    display: inline-flex;

    strong {
      margin-right: 1rem;
    }

    div {
      display: grid;
      grid-auto-rows: 44px;
      grid-template-columns: 100px 100px 100px;
      gap: 0px 10px px;
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
          <Image
            src={country.flag}
            alt="Image of the country flag"
            width={560}
            height={400}
            data-cy="country-image"
          />
          <CountryInfo>
            <h2>{country.name}</h2>
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
              <div data-cy="border-countries">
                {borderCountries &&
                  borderCountries.map((country, key) => (
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
            </BorderCountries>
          </CountryInfo>
        </Details>
      ) : (
        <>Loading...</>
      )}
    </CountryPageContainer>
  );
};

export default Country;
