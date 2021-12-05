import '../styles/globals.css';
import { theme } from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from '../layout/Layout';
import Auth from '../middleware/Auth';

function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </Layout>
    </ThemeProvider>
  
  )
}

export default MyApp
