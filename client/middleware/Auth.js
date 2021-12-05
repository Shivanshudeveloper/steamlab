import React from 'react'
import { auth } from '../Firebase';
import { useRouter } from 'next/router';

const Auth = ({ children }) => {
    const router = useRouter();

    React.useEffect(() => {
        auth.onAuthStateChanged(function(user) {
            if (!user) {
                router.push({
                    pathname: '/login'
                });
            }
        });
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default Auth
