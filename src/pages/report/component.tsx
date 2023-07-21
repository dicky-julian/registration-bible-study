import { TableColumn } from "react-data-table-component";
import { Payload } from "../../constants/registration";

export const Report = () => {
    const tableColumns: TableColumn<Payload>[] = [
        {
            id: 'parent_name',
            name: 'Nama Orang Tua',
            selector: row => row.parent_name
        },
        {
            id: 'parent_phone',
            name: 'Telepon Orang Tua',
            selector: row => row.parent_phone
        },
        {
            id: 'parent_email',
            name: 'Email Orang Tua',
            selector: row => row.parent_email
        },
        {
            id: 'parent_address',
            name: 'Alamat Orang Tua',
            selector: row => row.parent_address
        },
        {
            id: 'parent_domicile',
            name: 'Domisili Orang Tua',
            selector: row => row.parent_domicile
        },
        {
            id: 'event_location',
            name: 'Lokasi Acara',
            selector: row => row.event_location
        },
    ];

    return (
        <section className='report_container'>
            <div className="report_container_content">
            </div>
        </section>
    )
}