import '../styles/globals.css';
import { AppPropsWithLayout } from 'src/types/types';
import { Provider } from 'react-redux';
import { store } from '../store';
import { AuthProvider } from 'src/components/AuthProvider';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const component = getLayout(<Component {...pageProps} />);
  return (
    <Provider store={store}>
      <AuthProvider>{component}</AuthProvider>
    </Provider>
  );
}

export default MyApp;
