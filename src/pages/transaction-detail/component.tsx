import { useParams } from 'react-router-dom';

export const TransactionDetail = () => {
    const { id } = useParams();
    return (
        <section className='transaction_detail_container'>
            <p>Transaction Detail: {id}</p>
        </section>
    )
}