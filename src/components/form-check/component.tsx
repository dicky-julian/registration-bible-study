import React, { useId } from 'react';
import Form from 'react-bootstrap/Form';

interface FormCheckProps {
    value: string;
    options: {
        value: string;
        label: string;
    }[],
    isInvalid?: boolean;
    onChange: (value: string) => void;
}

export const FormCheck = (props: FormCheckProps) => {
    const componentId = useId();
    return props.options.map((option) => (
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
    ))
}