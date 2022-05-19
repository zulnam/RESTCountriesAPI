import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegionFilter } from '../../../store/reducers/countries/countriesReducer';

import DropdownButton from './DropdownButton';
import DropdownContent from './DropdownContent';
import ChevronIcon from './ChevronIcon';
import ChevronIconSVG from '../../Icons/Chevron';

const Dropdown = () => {
  const dispatch = useDispatch();
  const regionFilter = useSelector((state) => state.countries.filters.region);
  const darkMode = useSelector((state) => state.user.darkMode);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (region) => {
    dispatch(setRegionFilter(region));
    setIsOpen(false);
  };

  return (
    <div>
      <DropdownButton
        className={
          darkMode
            ? 'dark-theme-header dark-box-shadow'
            : 'light-theme-header light-box-shadow'
        }
        data-cy="dropdown-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {regionFilter ? regionFilter : 'Filter By Region'}
        <ChevronIcon darkMode={darkMode} isOpen={isOpen}>
          <ChevronIconSVG />
        </ChevronIcon>
      </DropdownButton>
      <DropdownContent
        className={darkMode ? 'dark-theme-header' : 'light-theme-header'}
        data-cy="dropdown-content"
        isOpen={isOpen}
      >
        <a
          onClick={() => {
            handleSelection('Africa');
          }}
        >
          Africa
        </a>
        <a
          onClick={() => {
            handleSelection('Americas');
          }}
        >
          Americas
        </a>
        <a
          onClick={() => {
            handleSelection('Asia');
          }}
        >
          Asia
        </a>
        <a
          onClick={() => {
            handleSelection('Europe');
          }}
        >
          Europe
        </a>
        <a
          onClick={() => {
            handleSelection('Oceania');
          }}
        >
          Oceania
        </a>
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
