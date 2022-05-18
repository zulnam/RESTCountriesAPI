import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Dropdown from './Dropdown';
import SearchInput from './SearchInput';
import { filterByRegion } from '../../store/reducers/countries/countriesReducer';

const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 42px;
`;

const Filters = () => {
  const dispatch = useDispatch();
  const regionFilter = useSelector((state) => state.countries.filters.region);

  useEffect(() => {
    if (regionFilter) {
      dispatch(filterByRegion());
    }
  }, [dispatch, regionFilter]);

  return (
    <FiltersContainer>
      <SearchInput />
      <Dropdown />
    </FiltersContainer>
  );
};

export default Filters;
