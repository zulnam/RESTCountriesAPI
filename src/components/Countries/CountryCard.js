import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

const CountryContainer = styled.article`
  display: grid;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px -5px #ccc, 0 -1px 10px -5px #eee;
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
}) => (
  <Link href={`/country/${a3c}`}>
    <CountryContainer>
      <Image
        src={imageLink}
        alt="Image of the country flag"
        width={260}
        height={160}
      />
      <h3>{countryName}</h3>
      <ul>
        <li>
          <strong>Population:</strong> {population.toLocaleString()}
        </li>
        <li>
          <strong>Region:</strong> {region}
        </li>
        <li>
          <strong>Capital:</strong> {capital}
        </li>
      </ul>
    </CountryContainer>
  </Link>
);

export default CountryCard;
