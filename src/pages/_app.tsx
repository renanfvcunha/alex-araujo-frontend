import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#760403',
      },
      secondary: {
        main: '#9e3c3d',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
          },
        },
      },
    },
  });

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Alexandre Araújo | Consultoria e Contabilidade</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Consultoria e Contabilidade em Teresina - PI"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
