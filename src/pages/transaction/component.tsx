import { useNavigate } from "react-router-dom"
import { useTransaction } from "../../stores/transaction";
import Spinner from "react-bootstrap/Spinner";
import { Placeholder } from "../../components/placeholder/component";
import { TransactionStatus } from "../../constants/transaction";
import { formatAmount, formatDate } from "../../utils/format";

export const Transaction = () => {
    const navigate = useNavigate();
    const transaction = useTransaction().transaction;

    const onViewDetail = (bill_no: string) => {
        navigate(`/transaction/detail?bill_no=${bill_no}`);
    }

    const renderDate = (dateString: string) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
        return (
            <small>{formattedDate}</small>
        );
    }

    const renderAmount = (amount: number) => {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        const formattedAmount = formatter.format(amount);
        return (
            <small>{formattedAmount}</small>
        )
    }

    const renderStatus = (status: TransactionStatus) => {
        let variant = 'success';

        if (status === TransactionStatus.WAITING) variant = 'warning';
        else if (status === TransactionStatus.EXPIRED) variant = 'danger';

        return (
            <small className={`fw-bold text-${variant}`} style={{ letterSpacing: 1 }}>
                {status}
            </small>
        )
    }

    const getStatusVariant = (status: TransactionStatus) => {
        let variant = 'success';

        if (status === TransactionStatus.WAITING) variant = 'warning';
        else if (status === TransactionStatus.EXPIRED) variant = 'danger';

        return variant;
    }

    return (
        <section className='transaction_container'>
            <div className='transaction_header'>
                <h2>Riwayat Transaksi</h2>
                <span>Pilih item untuk melihat detail transaksi</span>
            </div>

            <div className="transaction_body">
                {transaction?.length ? transaction.map((trx, index) => (
                    <div className="transaction_item py-3" onClick={() => onViewDetail(trx.bill_no)} key={`${trx.bill_no}/${index}`}>
                        <div className="d-flex justify-content-between">
                            <small className="fw-bold">{trx.bill_no}</small>
                            <small>{formatAmount(trx.bill_total)}</small>
                        </div>
                        <div className="d-flex justify-content-between">
                            <small>
                                {formatDate(trx.paid_at || trx.expired_at || trx.bill_at)}
                            </small>
                            <small className={`fw-bold text-${getStatusVariant(trx.status)}`} style={{ letterSpacing: 1 }}>
                                {trx.status}
                            </small>
                        </div>
                    </div>
                )) : (
                    Array.from({ length: 3 }, (_, index) => 0 + index).map((index) => (
                        <div className="transaction_item py-3" key={`placeholder_${index}`}>
                            <div className="d-flex justify-content-between">
                                <Placeholder width={160} height={19.5} />
                                <Placeholder width={90} height={19.5} />
                            </div>
                            <div className="d-flex justify-content-between mt-1">
                                <Placeholder width={90} height={19.5} />
                                <Placeholder width={70} height={19.5} />
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="fill_space"></div>
        </section>
    )
}