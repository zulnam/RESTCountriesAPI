import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Image from 'next/image';
import { searchForCountry } from '../../store/reducers/countries/countriesReducer';

const InputContainer = styled.div`
  height: 3.5rem;
  background-color: #fff;
  box-shadow: 0 5px 10px -5px #ccc, 0 -1px 10px -5px #eee;
  border-radius: 0.5rem;
  display: flex;
  margin-bottom: 1em;
  align-items: center;

  input {
    border: none;
    padding: 0 26px;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }
`;

const IconContainer = styled.span`
  margin-left: 1rem;
`;

const SearchInput = () => {
  const dispatch = useDispatch();
  const regionFilter = useSelector((state) => state.countries.filters.region);
  const [value, setValue] = useState('');

  const changeHandler = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  useEffect(() => {
    dispatch(searchForCountry(value));
  }, [dispatch, value]);

  useEffect(() => {
    setValue('');
  }, [regionFilter]);

  return (
    <InputContainer>
      <IconContainer>
        <Image
          src="/magnifying-glass.svg"
          width={16}
          height={16}
          alt="Search Icon"
        />
      </IconContainer>
      <input
        type="text"
        name="search"
        placeholder="Search for a country..."
        value={value}
        onChange={changeHandler}
      />
    </InputContainer>
  );
};

export default SearchInput;
