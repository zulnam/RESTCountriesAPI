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
  padding: 30px 10px 24px 10px;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    padding: 30px 100px 42px 100px;
  }
`;

const Filters = () => {
  const dispatch = useDispatch();
  const regionFilter = useSelector((state) => state.countries.filters.region);
  const darkMode = useSelector((state) => state.user.darkMode);

  useEffect(() => {
    if (regionFilter) {
      dispatch(filterByRegion());
    }
  }, [dispatch, regionFilter]);

  return (
    <FiltersContainer
      className={darkMode ? 'dark-theme-body' : 'light-theme-body'}
    >
      <SearchInput />
      <Dropdown />
    </FiltersContainer>
  );
};

export default Filters;
