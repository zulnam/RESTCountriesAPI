import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import GlobalContainer from '../components/GlobalContainer';
import store from '../store/store';
import globalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <GlobalContainer>
        <Component {...pageProps} />
      </GlobalContainer>
    </Provider>
  );
}

export default MyApp;
