import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from "react-bootstrap";
import { Transaction, TransactionStatus } from '../../constants/transaction';
import { useTransaction } from '../../stores/transaction';
import { formatAmount, formatDate } from '../../utils/format';

const PaymentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
)

export const TransactionDetail = () => {
    const navigate = useNavigate();
    const trx = useTransaction().transaction;
    const [billNo, setBillNo] = useState<string | null>('');

    const transaction = useMemo<Transaction | undefined>(() => {
        if (!trx?.length) return undefined;
        const selected = trx.find(({ bill_no }) => bill_no === billNo);
        return selected;
    }, [billNo, trx])

    const getStatusVariant = (status: TransactionStatus) => {
        let variant = 'success';

        if (status === TransactionStatus.WAITING) variant = 'warning';
        else if (status === TransactionStatus.EXPIRED) variant = 'danger';

        return variant;
    }

    const getBillNo = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const params = {} as any;

        for (let [key, value] of searchParams.entries()) {
            params[key] = value;
        }

        if (params.bill_no) {
            setBillNo(params.bill_no);
        } else {
            setBillNo(null);
        }
    }

    useEffect(() => {
        getBillNo();
    }, [])

    return (
        <section className='transaction_detail_container'>
            <div className='transaction_detail_header'>
                <button onClick={() => navigate('/transaction')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
                    </svg>
                </button>
                <span className='ms-3'>
                    <b>{billNo}</b>
                </span>
            </div>
            <div className='transaction_detail_body'>
                {transaction ? (
                    <React.Fragment>
                        <div className='info_header'>
                            <div className={`status action__${getStatusVariant(transaction!.status)} text-${getStatusVariant(transaction!.status)}`}>
                                <PaymentIcon />
                            </div>
                            <span className='mt-3 fw-bold'>
                                {formatAmount(transaction.bill_total)}
                            </span>
                            <span className={`fw-bold text-${getStatusVariant(transaction.status)}`} style={{letterSpacing: 2}}>
                                {transaction.status}
                            </span>
                        </div>

                        <hr />

                        <div className='info_body'>
                            <span className='d-block mb-3 fw-bold'>Rincian Transaksi</span>
                            <div className='d-flex justify-content-between py-2'>
                                <span>Metode Pembayaran</span>
                                <span>{transaction.payment_channel_name || '-'}</span>
                            </div>
                            <div className='d-flex justify-content-between py-2'>
                                <span>Tanggal Tagihan</span>
                                <span>{transaction.bill_at ? formatDate(transaction.bill_at) : '-'}</span>
                            </div>
                            <div className='d-flex justify-content-between py-2'>
                                <span>Tanggal Pembayaran</span>
                                <span>{transaction.paid_at ? formatDate(transaction.paid_at) : '-'}</span>
                            </div>
                            <div className='d-flex justify-content-between py-2'>
                                <span>Batas Pembayaran</span>
                                <span>{transaction.expired_at ? formatDate(transaction.expired_at) : '-'}</span>
                            </div>
                            <div className='d-flex justify-content-between py-2'>
                                <span>No Tagihan</span>
                                <span>{transaction.bill_no}</span>
                            </div>
                            <div className='d-flex justify-content-between py-2'>
                                <span>ID Transaksi</span>
                                <span>{transaction.trx_id || '-'}</span>
                            </div>

                            <hr />

                            {transaction.items?.map((item, index) => (
                                <div className='d-flex justify-content-between py-2' key={`${item.id}-${index}`}>
                                    <div>
                                        <span className='d-block'>{item.name} ({item.qty}X)</span>
                                        <span className='d-block' style={{fontSize: '.75rem'}}>
                                            {item.notes}
                                        </span>
                                    </div>
                                    <span>{formatAmount(item.price)}</span>
                                </div>
                            ))}

                            <hr />
                            
                            <div className='d-flex justify-content-between py-2'>
                                <span className='fw-bold'>Total</span>
                                <span className='fw-bold'>{formatAmount(transaction.bill_total)}</span>
                            </div>
                        </div>

                        <a href={transaction.payment_url} target='_blank'>
                            <Button className="mt-4" disabled={!transaction.payment_url}>
                                Ke Halaman Pembayaran
                            </Button>
                        </a>
                    </React.Fragment>
                ) : (
                    <Spinner />
                )}
                
            </div>
            <div className="fill_space"></div>
        </section>
    )
}