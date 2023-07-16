import React, { FormEvent, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormCheck } from '../../components/form-check/component';
import { domicile_address, event_location, gender, is_join_cg, child_pick_up, numberDescriptions, Payload, Child } from '../../constants/registration-form';

const Required = () => <span className='text-danger'>*</span>

export const Registration = () => {
    const [payload, setPayload] = useState<Payload>(new Payload());
    
    const onChange = (key: keyof Omit<Payload, 'children'>, value: string) => {
        const newPayload = {...payload};
        newPayload[key] = value;
        setPayload(newPayload);
    }

    const onChangeChildren = <K extends keyof Child>(
        key: number,
        keyField: K,
        value: Child[K]
      ) => {
        const newPayload: Payload = { ...payload };
        newPayload.children[key][keyField] = value;
        setPayload(newPayload);
    };

    const handleChildrenAction = (prop: {
        action: 'add' | 'remove',
        removedId?: number,
        children?: Child,
    }) => {
        const { action, removedId, children } = prop;
        const newPayload = {...payload};
        if (action === 'add') {
            newPayload.children.push(children as Child);
            setPayload(newPayload);
        } else if (action === 'remove' && removedId != undefined) {
            newPayload.children.splice(removedId, 1);
            setPayload(newPayload);
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return (
        <section className='registration_container p-3 pb-4'>
            <h1 className='mb-4'>Form Pendaftaran Bible Study Eaglekidz</h1>
            <Form onSubmit={onSubmit}>
                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>Nama lengkap Orang Tua/Wali <Required /></Card.Text>
                        <Form.Control
                            value={payload.parent_name}
                            onChange={(e) => onChange('parent_name', e.target.value)}
                        />
                        <span className="separator" />
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>No Handphone Orang Tua/Wali <Required /></Card.Text>
                        <Form.Control
                            value={payload.parent_phone}
                            onChange={(e) => onChange('parent_phone', e.target.value)}
                        />
                        <span className="separator" />
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>Email Orang Tua/Wali <Required /></Card.Text>
                        <Form.Control
                            value={payload.parent_email}
                            onChange={(e) => onChange('parent_email', e.target.value)}
                        />
                        <span className="separator" />
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>Alamat <Required /></Card.Text>
                        <Form.Control
                            value={payload.parent_address}
                            onChange={(e) => onChange('parent_address', e.target.value)}
                        />
                        <span className="separator" />
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>Kota Domisili <Required /></Card.Text>
                        <FormCheck
                            value={payload.parent_domicile}
                            options={domicile_address}
                            onChange={(value) => onChange('parent_domicile', value)}
                        />
                        <span className="separator" />
                    </Card.Body>
                </Card>

                <Card className='mb-2'>
                    <Card.Body>
                        <Card.Text>Mengikuti Bible study di <Required /></Card.Text>
                        <FormCheck
                            value={payload.event_location}
                            options={event_location}
                            onChange={(value) => onChange('event_location', value)}
                        />
                        <span className="separator" />
                    </Card.Body>
                </Card>

                {payload.children?.map((child, index) => (
                    <React.Fragment key={`child-form-${index}`}>
                        {payload.children.length > 1 ? (
                            <div className='child_form_label'>
                                <span>Anak {numberDescriptions[index + 1]}</span>
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
                                <Card.Text>Jenis Kelamin <Required /></Card.Text>
                                <FormCheck
                                    value={child.gender}
                                    options={gender}
                                    onChange={(value) => onChangeChildren(index, 'gender', value)}
                                />
                                <span className="separator" />
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
                            </Card.Body>
                        </Card>

                        <Card className='mb-2'>
                            <Card.Body>
                                <Card.Text>Sudah Join Connect Group Eaglekidz? <Required /></Card.Text>
                                <FormCheck
                                    value={child.is_join_cg}
                                    options={is_join_cg}
                                    onChange={(value) => onChangeChildren(index, 'is_join_cg', value)}
                                />
                                <span className="separator" />
                            </Card.Body>
                        </Card>

                        <Card className='mb-2'>
                            <Card.Body>
                                <Card.Text>Penjemputan Anak <Required /></Card.Text>
                                <FormCheck
                                    value={child.pick_up_type}
                                    options={child_pick_up}
                                    onChange={(value) => onChangeChildren(index, 'pick_up_type', value)}
                                />
                                <span className="separator" />
                            </Card.Body>
                        </Card>
                    </React.Fragment>
                ))}
                
                <div className='registration_container_footer'>
                    <div className='child_form_action'>
                        <span>
                            Ingin menambah data untuk anak {numberDescriptions[payload.children.length + 1]}?
                        </span>
                        <Button
                            size='sm'
                            onClick={() => handleChildrenAction({
                                action: 'add',
                                children: new Child(),
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