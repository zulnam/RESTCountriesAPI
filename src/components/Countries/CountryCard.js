import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

const CountryContainer = styled.article`
  display: grid;
  border-radius: 0.5rem;
  cursor: pointer;
  img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  h3 {
    font-size: 1.1rem;
    text-align: center;
  }
  ul {
    list-style-type: none;
    margin-top: 0.5rem;
  }
  li {
    font-size: 0.9rem;
    padding: 4px 0;
  }
  strong {
    font-weight: 600;
  }
`;

const CountryCard = ({
  countryName,
  imageLink,
  population,
  region,
  capital,
  a3c,
  darkMode,
}) => (
  <Link href={`/country/${a3c}`}>
    <CountryContainer
      className={darkMode ? 'dark-box-shadow' : 'light-box-shadow'}
    >
      <Image
        src={imageLink}
        alt="Image of the country flag"
        width={260}
        height={160}
      />
      <h3>{countryName}</h3>
      <ul>
        <li>
          <strong>Population:</strong>{' '}
          {population ? population.toLocaleString() : 'N/A'}
        </li>
        <li>
          <strong>Region:</strong> {region ? region : 'N/A'}
        </li>
        <li>
          <strong>Capital:</strong> {capital ? capital : 'N/A'}
        </li>
      </ul>
    </CountryContainer>
  </Link>
);

export default React.memo(CountryCard);
