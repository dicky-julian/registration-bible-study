import { useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import DataTable, { ExpanderComponentProps, TableColumn } from "react-data-table-component";
import { Child, Payload, dummy } from "../../constants/registration";

const ExpandedComponent: React.FC<ExpanderComponentProps<Payload>> = ({ data }) => {

    const columns: TableColumn<Child>[] = [
        {
            id: 'name',
            name: 'Nama Anak',
            selector: row => row.name || '-'
        },
        {
            id: 'grade',
            name: 'Kelas',
            selector: row => row.grade || '-'
        },
        {
            id: 'gender',
            name: 'Jenis Kelamin',
            selector: row => row.gender || '-'
        },
        {
            id: 'phone',
            name: 'Nomor Telepon',
            selector: row => row.phone || '-'
        },
        {
            id: 'is_join_cg',
            name: 'Join CG',
            selector: row => row.is_join_cg || '-'
        },
        {
            id: 'pick_up_type',
            name: 'Penjemputan Anak',
            selector: row => row.pick_up_type || '-'
        },
    ];

    return (
        <div className="report_children">
            <DataTable
                columns={columns}
                data={data.children || []}
                highlightOnHover
            />
        </div>
    )
}; 

export const Report = () => {
    const [filterText, setFilterText] = useState('');

    const columns: TableColumn<Payload>[] = [
        {
            id: 'parent_name',
            name: 'Nama Orang Tua',
            selector: row => row.parent_name,
            sortable: true,
        },
        {
            id: 'parent_phone',
            name: 'Telepon Orang Tua',
            selector: row => row.parent_phone,
            sortable: true,
        },
        {
            id: 'parent_email',
            name: 'Email Orang Tua',
            selector: row => row.parent_email,
            sortable: true,
        },
        {
            id: 'parent_address',
            name: 'Alamat Orang Tua',
            selector: row => row.parent_address,
            sortable: true,
        },
        {
            id: 'parent_domicile',
            name: 'Domisili Orang Tua',
            selector: row => row.parent_domicile,
            sortable: true,
        },
        {
            id: 'event_location',
            name: 'Lokasi Acara',
            selector: row => row.event_location,
            sortable: true,
        },
    ];

    const filteredData = useMemo<Payload[]>(() => {
        const keyword = filterText.toLowerCase();

        return dummy.filter((data) => (
            data.parent_name.toLowerCase().includes(keyword) ||
            data.children.find(({ name }) => name.toLowerCase().includes(keyword))
        ));
    }, [dummy, filterText])

    return (
        <section className='report_container'>
            <div className="report_container_content">
                <div className='report_filter'>
                    <Form.Control
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                        placeholder='Cari nama orang tua atau anak'
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    highlightOnHover
                    pointerOnHover
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                />
            </div>
        </section>
    )
}