import Head from 'next/head';
import LoginForm from '../components/Login';
import { Box } from '@mui/material';

const login = () => {

    

    return (
        <>
        <Head>
            <title>Steamlab | Login</title>
        </Head>
        <Box
            component="main"
            sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            mt: 8
            }}
        >
            <LoginForm />
        </Box>
        </>
    );
};

export default login;
