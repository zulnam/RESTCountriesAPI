import '../styles/globals.css';
import GlobalContainer from '../components/GlobalContainer';
import { Provider } from 'react-redux';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalContainer>
        <Component {...pageProps} />
      </GlobalContainer>
    </Provider>
  );
}

export default MyApp;
