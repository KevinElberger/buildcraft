import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../styles/global';
import { lightTheme } from '../styles/theme.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App
