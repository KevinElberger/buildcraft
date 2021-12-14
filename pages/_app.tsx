import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components";
import { store } from '../store/store';
import { GlobalStyles } from '../styles/global';
import { lightTheme } from '../styles/theme.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App
