export class Payload {
    parent_name: string = '';
    parent_phone: string = '';
    parent_email: string = '';
    parent_address: string = '';
    parent_domicile: string = '';
    event_location: string = '';
    children: Child[] = [new Child()];
}

export class Child {
    gender: string = '';
    phone?: string = '';
    is_join_cg: string = '';
    pick_up_type: string = '';
}

export const domicile_address = [
    { value: 'Jakarta Utara', label: 'Jakarta Utara' },
    { value: 'Jakarta Timur', label: 'Jakarta Timur' },
    { value: 'Jakarta Selatan', label: 'Jakarta Selatan' },
    { value: 'Jakarta Barat', label: 'Jakarta Barat' },
    { value: 'Jakarta Pusat', label: 'Jakarta Pusat' },
    { value: 'Tangerang', label: 'Tangerang' },
    { value: 'Bogor', label: 'Bogor' },
    { value: 'Cikarang', label: 'Cikarang' },
    { value: 'Bekasi', label: 'Bekasi' },
];

export const event_location = [
    { value: 'GMS Jakarta Barat', label: 'GMS Jakarta Barat'},
    { value: 'GMS Tangerang', label: 'GMS Tangerang'},
    { value: 'GMS Bogor', label: 'GMS Bogor'},
];

export const gender = [
    { value: 'Perempuan', label: 'Perempuan'},
    { value: 'Laki-laki', label: 'Laki-laki'},
];

export const is_join_cg = [
    { value: 'Sudah', label: 'Sudah'},
    { value: 'Belum', label: 'Belum'},
];

export const child_pick_up = [
    { value: 'hijau', label: 'Anak akan di jemput orang tua di area Gereja Mawar Sharon'},
    { value: 'merah', label: 'Anak tidak di jemput di area Gereja Mawar Sharon/ diijinkan untuk meninggalkan Gereja Mawar Sharon sendiri'},
];

export const numberDescriptions = [
    '',
    'pertama',
    'kedua',
    'ketiga',
    'keempat',
    'kelima',
    'keenam',
    'ketujuh',
    'kedelapan',
    'kesembilan',
    'kesepuluh',
    'sebelas',
    'dua belas',
    'tiga belas',
    'empat belas',
    'lima belas',
    'enam belas',
    'tujuh belas',
    'delapan belas',
    'sembilan belas',
    'dua puluh',
];