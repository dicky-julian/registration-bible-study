const PaymentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
)

export const TransactionDetail = () => {
    return (
        <section className='transaction_detail_container'>
            <div className='transaction_header'>
                <div className='status text-danger'>
                    <PaymentIcon />
                </div>
                <span className='mt-3 fw-bold'>Rp100.000</span>
                <span className='fw-bold text-danger' style={{letterSpacing: 2}}>PAID</span>
            </div>

            <hr />

            <div className='transaction_content'>
                <span className='d-block mb-3 fw-bold'>Rincian Transaksi</span>
                <div className='d-flex justify-content-between py-2'>
                    <span>Metode Pembayaran</span>
                    <span>BCA Virtual Account</span>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <span>Tanggal Tagihan</span>
                    <span>18 Jul 2023 3:37PM</span>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <span>Tanggal Pembayaran</span>
                    <span>18 Jul 2023 5:55PM</span>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <span>Batas Pembayaran</span>
                    <span>19 Jul 2023 3:37PM</span>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <span>No Tagihan</span>
                    <span>GMS/EK-JBT/23/04/20094339042</span>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <span>ID Transaksi</span>
                    <span>1900533471892131</span>
                </div>

                <hr />

                <div className='d-flex justify-content-between py-2'>
                    <div>
                        <span className='d-block'>Volunteer Kids Camp Jabodetabek (1x)</span>
                        <span className='d-block' style={{fontSize: '.75rem'}}>
                            FRANCISCA XAVERINA WIDYASTUTI
                        </span>
                    </div>
                    <span>Rp50.000</span>
                </div>

                <div className='d-flex justify-content-between py-2'>
                    <div>
                        <span className='d-block'>Volunteer Kids Camp Jabodetabek (1x)</span>
                        <span className='d-block' style={{fontSize: '.75rem'}}>
                            SUGENG WIDODO
                        </span>
                    </div>
                    <span>Rp50.000</span>
                </div>

                <hr />
                
                <div className='d-flex justify-content-between py-2'>
                    <span className='fw-bold'>Total</span>
                    <span className='fw-bold'>Rp100.000</span>
                </div>
            </div>
        </section>
    )
}