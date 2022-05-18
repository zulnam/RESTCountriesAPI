import { useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from './Dropdown';
import SearchInput from './SearchInput';

const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 42px;
`;

const Filters = () => {
  return (
    <FiltersContainer>
      <SearchInput />
      <Dropdown />
    </FiltersContainer>
  );
};

export default Filters;
