import React from 'react';
import { useParams } from 'react-router-dom';

export const BillingDetail = () => {
    const { id } = useParams();
    return (
        <section className='billing_detail_container'>
            <p>Billing Detail {id}</p>
        </section>
    )
}