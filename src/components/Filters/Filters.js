import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Dropdown from './Dropdown/Dropdown';
import SearchInput from './Search/SearchInput';
import { filterByRegion } from '../../store/reducers/countries/countriesReducer';
import theme from '../../styles/theme';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px 24px 10px;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    margin: 0 100px 42px 100px;
  }
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
