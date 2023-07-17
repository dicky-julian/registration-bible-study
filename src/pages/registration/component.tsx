import React, { FormEvent, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as Constant from '../../constants/registration-form';
import { FormCheck } from '../../components/form-check/component';

const Required = () => (
    <span className='text-danger'>*</span>
);

export const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [payload, setPayload] = useState<Constant.Payload>(new Constant.Payload());
    
    const onChange = (key: keyof Omit<Constant.Payload, 'children'>, value: string) => {
        const newPayload = {...payload};
        newPayload[key] = value;
        setPayload(newPayload);
    }

    const onChangeChildren = <K extends keyof Constant.Child>(
        key: number,
        keyField: K,
        value: Constant.Child[K]
      ) => {
        const newPayload: Constant.Payload = { ...payload };
        newPayload.children[key][keyField] = value;
        setPayload(newPayload);
    };

    const handleChildrenAction = (prop: {
        action: 'add' | 'remove',
        removedId?: number,
        children?: Constant.Child,
    }) => {
        const { action, removedId, children } = prop;
        const newPayload = {...payload};
        if (action === 'add') {
            newPayload.children.push(children as Constant.Child);
            setPayload(newPayload);
        } else if (action === 'remove' && removedId != undefined) {
            newPayload.children.splice(removedId, 1);
            setPayload(newPayload);
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            console.log('[DEBUG] gagal?');
        } else {
            console.log('[DEBUG] payload : ', payload);
        }

        

        setValidated(true);
    }
    
    return (
        <section className='registration_container'>
            <div className='mb-4'>
                <h1>Form Pendaftaran Bible Study Eaglekidz</h1>
                <span className='text-danger'>* Menunjukkan Pertanyaan wajib diisi</span>
            </div>
            
            <Form noValidate validated={validated} onSubmit={onSubmit}>
                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>Nama lengkap Orang Tua/Wali <Required /></Card.Text>
                        <Form.Control
                            required
                            value={payload.parent_name}
                            onChange={(e) => onChange('parent_name', e.target.value)}
                        />
                        <span className="separator" />
                        <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>No Handphone Orang Tua/Wali <Required /></Card.Text>
                        <Form.Control
                            required
                            value={payload.parent_phone}
                            onChange={(e) => onChange('parent_phone', e.target.value)}
                        />
                        <span className="separator" />
                        <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>Email Orang Tua/Wali <Required /></Card.Text>
                        <Form.Control
                            required
                            value={payload.parent_email}
                            onChange={(e) => onChange('parent_email', e.target.value)}
                        />
                        <span className="separator" />
                        <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>Alamat <Required /></Card.Text>
                        <Form.Control
                            required
                            value={payload.parent_address}
                            onChange={(e) => onChange('parent_address', e.target.value)}
                        />
                        <span className="separator" />
                        <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <FormCheck
                            required
                            label='Kota Domisili'
                            value={payload.parent_domicile}
                            options={Constant.domicile_address}
                            onChange={(value) => onChange('parent_domicile', value)}
                        />
                        <span className="separator" />
                        <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <FormCheck
                            required
                            label='Mengikuti Bible study di'
                            value={payload.event_location}
                            options={Constant.event_location}
                            onChange={(value) => onChange('event_location', value)}
                        />
                        <span className="separator" />
                        <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                    </Card.Body>
                </Card>

                {payload.children?.map((child, index) => (
                    <React.Fragment key={`child-form-${index}`}>
                        {payload.children.length > 1 ? (
                            <div className='child_form_label'>
                                <span>Anak {Constant.numberDescriptions[index + 1]}</span>
                                <button
                                    onClick={() => handleChildrenAction({
                                        action: 'remove',
                                        removedId: index,
                                    })}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="7" y1="7" x2="17" y2="17" stroke="currentColor" strokeWidth="2" />
                                        <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                            </div>
                        ) : null}
                        <Card className='mb-2'>
                            <Card.Body>
                                <FormCheck
                                    required
                                    label='Jenis Kelamin'
                                    value={child.gender}
                                    options={Constant.gender}
                                    onChange={(value) => onChangeChildren(index, 'gender', value)}
                                />
                                <span className="separator" />
                                <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                            </Card.Body>
                        </Card>

                        <Card className='mb-2'>
                            <Card.Body>
                                <Card.Text>No Handphone Anak (Jika Ada)</Card.Text>
                                <Form.Control
                                    value={child.phone}
                                    onChange={(e) => onChangeChildren(index, 'phone', e.target.value)}
                                />
                                <span className="separator" />
                                <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                            </Card.Body>
                        </Card>

                        <Card className='mb-2'>
                            <Card.Body>
                                <FormCheck
                                    required
                                    label='Sudah Join Connect Group Eaglekidz?'
                                    value={child.is_join_cg}
                                    options={Constant.is_join_cg}
                                    onChange={(value) => onChangeChildren(index, 'is_join_cg', value)}
                                />
                                <span className="separator" />
                                <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                            </Card.Body>
                        </Card>

                        <Card className='mb-2'>
                            <Card.Body>
                                <FormCheck
                                    required
                                    label='Penjemputan Anak'
                                    value={child.pick_up_type}
                                    options={Constant.child_pick_up}
                                    onChange={(value) => onChangeChildren(index, 'pick_up_type', value)}
                                />
                                <span className="separator" />
                                <Form.Control.Feedback type="invalid">
                            Pertanyaan wajib diisi
                        </Form.Control.Feedback>
                            </Card.Body>
                        </Card>
                    </React.Fragment>
                ))}
                
                <div className='registration_container_footer'>
                    <div className='child_form_action'>
                        <span>
                            Ingin menambah data untuk anak {Constant.numberDescriptions[payload.children.length + 1]}?
                        </span>
                        <Button
                            size='sm'
                            variant='secondary'
                            onClick={() => handleChildrenAction({
                                action: 'add',
                                children: new Constant.Child(),
                            })}
                        >
                            Tambah
                        </Button>
                    </div>
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
        </section>
    )
}