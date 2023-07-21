import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useAuth } from '../stores/auth';
import { getPersonId } from '../datas/auth';
import { getTransactionByPersonId } from '../datas/transaction';
import { useTransaction } from '../stores/transaction';

const AuthProvider = (props: React.PropsWithChildren) => {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const auth = useAuth();
    const transaction = useTransaction().transaction;

    const setupCredentials = async (authCode: string) => {
        auth.setAuthCode(authCode);
        const personId = await getPersonId(authCode);

        if (personId) {
            const transaction = await getTransactionByPersonId(personId);
            if (transaction?.length) navigate('/transaction');
        }
    }

    useEffect(() => {
        const authCode = params.get('code') ?? auth.authCode;
        if (authCode) {
            setupCredentials(authCode);
            navigate('/');
        }
    }, [])

    return (
        <React.Fragment>
            {transaction ? (
                props.children
            ) : (
                <div className='d-flex align-items-center justify-content-center vw-100 vh-100'>
                    {transaction !== null ? (
                        <Spinner />
                    ) : <p>Error</p>}
                </div>
            )}
        </React.Fragment>
    )
}

export default AuthProvider;