import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../stores/auth';
import { getPersonId } from '../datas/auth';
import { getTransactionByPersonId } from '../datas/transaction';
import { useTransaction } from '../stores/transaction';

const AuthProvider = (props: React.PropsWithChildren) => {
    const [params] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();

    const auth = useAuth();
    const transaction = useTransaction().transaction;

    const setupCredentials = async (authCode: string) => {
        auth.setAuthCode(authCode);
        const personId = await getPersonId(authCode);

        if (personId) {
            const transaction = await getTransactionByPersonId(personId);
            if (transaction?.length) {
                navigate('/transaction');
                return;
            }
        }

        navigate('/');
    }

    const isAdmin = useMemo<boolean>(() => {
        return location.pathname.includes('/report');
    }, [location.pathname])

    useEffect(() => {
        const authCode = params.get('code') ?? auth.authCode;
        if (authCode) {
            setupCredentials(authCode);
        }
    }, [])

    return (
        <>
            {transaction || isAdmin ? (
                props.children
            ) : (
                <div className='d-flex align-items-center justify-content-center vw-100 vh-100'>
                    {transaction !== null ? (
                        <img className='loader' src='/logo.png' />
                    ) : <p>Error</p>}
                </div>
            )}
        </>
    )
}

export default AuthProvider;