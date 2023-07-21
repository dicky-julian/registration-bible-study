export enum TransactionStatus {
    PAID = 'PAID',
    WAITING = 'WAITING',
    EXPIRED = 'EXPIRED',
}

export class TransactionItem {
    id: string = '';
    name: string = '';
    qty: number = 0;
    price: number = 0;
    notes: string = '';
}

export class Transaction {
    bill_no: string = '';
    trx_id?: string = '';
    status: TransactionStatus = TransactionStatus.WAITING;
    bill_at: string = '';
    expired_at: string = '';
    paid_at?: string;
    bill_total: number = 0;
    bill_description: string = '';
    payment_channel_id?: string;
    payment_channel_name?: string;
    cf_payment_receipt_id?: string;
    items: TransactionItem[] = [];
    payment_url: string = '';
}