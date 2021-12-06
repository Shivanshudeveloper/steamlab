import Head from 'next/head';
import {
  Box
} from '@mui/material';

import RegisterForm from '../components/Register';

const register = () => {

  return (
    <>
      <Head>
        <title>
          Steamlab | Register
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
          mt: 2
        }}
      >
        <RegisterForm />
        
      </Box>
    </>
  );
};

export default register;
