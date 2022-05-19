import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/reducers/user/userReducer';

import HeaderContainer from './HeaderContainer';
import MoonIcon from './MoonIcon';
import MoonIconSVG from '../Icons/Moon';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.user.darkMode);

  return (
    <HeaderContainer
      className={darkMode ? 'dark-theme-header' : 'white-theme-header'}
    >
      <h1>Where in the world?</h1>
      <MoonIcon
        darkMode={darkMode}
        onClick={() => {
          dispatch(toggleDarkMode());
        }}
      >
        <MoonIconSVG />
        Dark Mode
      </MoonIcon>
    </HeaderContainer>
  );
};

export default Header;
