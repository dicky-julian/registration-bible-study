import axios from 'axios';
import { useTransaction } from '../stores/transaction';
import { Transaction, TransactionStatus } from '../constants/transaction';

const baseUrl = process.env.REACT_APP_API_URL_GMS_PAYMENT;
const eventCode = process.env.REACT_APP_EVENT_CODE;

type TransactionItem = {
    item_id: string;
    qty: number;
    notes: string;
}

export const getTransactionByPersonId = async (personId: string) => {
    try {
        const setTransaction = useTransaction.getState().setTransaction;

        const dataTransaction: Transaction[] = [
            {
                "bill_no": "GMS/BS-JBT/23/07/20215200100",
                "trx_id": undefined,
                "status": TransactionStatus.WAITING,
                "bill_at": "2023-07-20T21:52:00.000Z",
                "expired_at": "2023-07-21T21:52:00.000Z",
                "paid_at": undefined,
                "bill_total": 600000,
                "bill_description": "Pembelian Tiket Kids Camp Jabodetabek",
                "payment_channel_id": undefined,
                "payment_channel_name": undefined,
                "cf_payment_receipt_id": undefined,
                "items": [
                    {
                        "id": "9f20f029c3a94531a8ee0ad3dc7adfe5",
                        "name": "Volunteer Kids Camp Jabodetabek",
                        "qty": 1,
                        "price": 300000,
                        "notes": "FRANCISCA XAVERINA WIDYASTUTI",
                    },
                    {
                        "id": "9f20f029c3a94531a8ee0ad3dc7adfe5",
                        "name": "Volunteer Kids Camp Jabodetabek",
                        "qty": 1,
                        "price": 300000,
                        "notes": "DICKY JULIAN PRATAMA",
                    }
                ],
                "payment_url": "https://payment.gms.church?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25faWQiOiJhM2ZkNjY4NWQ0YmZhOTI0NmU3NDVmNjA3OWI3ZjE4YSIsImlhdCI6MTY4OTk2NjE0NSwiZXhwIjoxNjg5OTgwNTQ1fQ._qO735JLnPn8zVH057nsex1AYepktA3iER0NyZXUgYo&bill_no=GMS/BS-JBT/23/07/20215200100",
            },
            {
                "bill_no": "GMS/BS-JBT/22/07/20215200009",
                "trx_id": undefined,
                "status": TransactionStatus.PAID,
                "bill_at": "2023-07-20T21:52:00.000Z",
                "expired_at": "2023-07-21T21:52:00.000Z",
                "paid_at": "2023-07-22T21:52:00.000Z",
                "bill_total": 400000,
                "bill_description": "Pembelian Tiket Kids Camp Jabodetabek",
                "payment_channel_id": undefined,
                "payment_channel_name": undefined,
                "cf_payment_receipt_id": undefined,
                "items": [
                    {
                        "id": "9f20f029c3a94531a8ee0ad3dc7adfe5",
                        "name": "Volunteer Kids Camp Jabodetabek",
                        "qty": 1,
                        "price": 200000,
                        "notes": "FRANCISCA XAVERINA WIDYASTUTI",
                    },
                    {
                        "id": "9f20f029c3a94531a8ee0ad3dc7adfe5",
                        "name": "Volunteer Kids Camp Jabodetabek",
                        "qty": 1,
                        "price": 200000,
                        "notes": "DICKY JULIAN PRATAMA",
                    }
                ],
                "payment_url": "https://payment.gms.church?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25faWQiOiJhM2ZkNjY4NWQ0YmZhOTI0NmU3NDVmNjA3OWI3ZjE4YSIsImlhdCI6MTY4OTk2NjE0NSwiZXhwIjoxNjg5OTgwNTQ1fQ._qO735JLnPn8zVH057nsex1AYepktA3iER0NyZXUgYo&bill_no=GMS/BS-JBT/23/07/20215200100",
            },
            {
                "bill_no": "GMS/BS-JBT/22/07/20215200008",
                "trx_id": undefined,
                "status": TransactionStatus.EXPIRED,
                "bill_at": "2023-07-20T21:52:00.000Z",
                "expired_at": "2023-07-21T21:52:00.000Z",
                "paid_at": "",
                "bill_total": 400000,
                "bill_description": "Pembelian Tiket Kids Camp Jabodetabek",
                "payment_channel_id": undefined,
                "payment_channel_name": undefined,
                "cf_payment_receipt_id": undefined,
                "items": [
                    {
                        "id": "9f20f029c3a94531a8ee0ad3dc7adfe5",
                        "name": "Volunteer Kids Camp Jabodetabek",
                        "qty": 1,
                        "price": 200000,
                        "notes": "FRANCISCA XAVERINA WIDYASTUTI",
                    },
                    {
                        "id": "9f20f029c3a94531a8ee0ad3dc7adfe5",
                        "name": "Volunteer Kids Camp Jabodetabek",
                        "qty": 1,
                        "price": 200000,
                        "notes": "DICKY JULIAN PRATAMA",
                    }
                ],
                "payment_url": "https://payment.gms.church?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25faWQiOiJhM2ZkNjY4NWQ0YmZhOTI0NmU3NDVmNjA3OWI3ZjE4YSIsImlhdCI6MTY4OTk2NjE0NSwiZXhwIjoxNjg5OTgwNTQ1fQ._qO735JLnPn8zVH057nsex1AYepktA3iER0NyZXUgYo&bill_no=GMS/BS-JBT/23/07/20215200100",
            }
        ];

        setTransaction(dataTransaction);
        return dataTransaction;

        const response = await axios({
            method: 'get',
            url: `${baseUrl}/transactions/${personId}/details`,
            params: {
                code: eventCode,
            },
        });
        console.log('[DEBUG] response get transaction : ', response);
    } catch (err) {
        console.log('[DEBUG] error get transaction : ', err);
    }
}

export const postTransaction = async (personId: string, items: TransactionItem[]) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${baseUrl}/transactions/${personId}`,
            params: {
                code: eventCode,
            },
            data: {
                description: 'Pembelian Tiket Kids Camp Jabodetabek',
                items,
                redirect_url: `${process.env.BASE_URL}/?auth_code={{personId}}`,
            }
        });
        console.log('[DEBUG] response post transaction : ', response);
    } catch (err) {
        console.log('[DEBUG] err post transaction : ', err);
    }
}