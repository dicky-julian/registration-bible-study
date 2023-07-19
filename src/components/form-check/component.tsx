import { useId } from 'react';
import Form from 'react-bootstrap/Form';

interface FormCheckProps {
    value: string;
    options: {
        value: string;
        label: string;
    }[],
    label?: string;
    required?: boolean;
    isInvalid?: boolean;
    onChange: (value: string) => void;
}

const Required = () => (
    <span className='text-danger'>*</span>
);

export const FormCheck = (props: FormCheckProps) => {
    const componentId = useId();
    return (
        <div className='form-control-check position-relative'>
            {props.required && (
                <Form.Control
                    required
                    defaultValue={props.value}
                    className='position-absolute'
                    style={{ top: 0, left: 0 }}
                />
            )}

            {props.label && (
                <p className='position-relative mb-0 pb-3'>
                    {props.label} {props.required && <Required />}
                </p>
            )}

            {props.options.map((option) => (
                <div
                    key={`${componentId}_${option.value}`}
                    className="mb-3"
                    onClick={() => props.onChange(option.value)}
                >
                    <Form.Check
                        readOnly
                        type='radio'
                        label={option.label}
                        checked={option.value === props.value}
                        value={option.value}
                        isInvalid={props.isInvalid}
                    />
                </div>
            ))}
        </div>
    )
}