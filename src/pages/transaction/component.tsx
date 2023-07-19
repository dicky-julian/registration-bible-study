import { useNavigate  } from "react-router-dom"

export const Transaction = () => {
    const navigate = useNavigate ();

    const onViewDetail = (bill_no: string) => {
        navigate(`/transaction/${bill_no}`);
    }

    return (
        <section className='transaction_container'>
            <div className='transaction_title'>
                <h2>Riwayat Transaksi</h2>
                <span>Pilih item untuk melihat detail transaksi</span>
            </div>

            <div className="transaction_list">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
                    <div className="transaction_card py-3" onClick={() => onViewDetail('GMS/EK-JBT/23/05/03053949680')} key={i}>
                        <div className="d-flex justify-content-between">
                            <span className="fw-bold">GMS/EK-JBT/23/05/03053949680</span>
                            <span className="fw-bold">Rp30.000</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <small>18 Jul 2023</small>
                            <small className="fw-bold text-success">PAID</small>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fill_space"></div>
        </section>
    )
}