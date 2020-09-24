import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import seo from '../seo.config';
import GlobalStyles from '@/styles/globalStyles';
import { theme } from '@/styles/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...seo} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
