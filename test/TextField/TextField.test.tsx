import { render, screen, fireEvent } from '@testing-library/react';
import TextField, { TextInputProps } from '../../src/components/TextField/TextField';
import React from 'react';

const renderTextField = (props?: Partial<TextInputProps>) => {
    return render(<TextField label="Label" {...props} />);
};

describe('TextField Component', () => {
    it('renders the component', () => {
        renderTextField();
        expect(screen.getByLabelText('Label')).toBeInTheDocument();
    });

    it('displays the correct placeholder', () => {
        renderTextField({ placeholder: 'Enter text' });
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('updates value when typing', () => {
        const handleChange = jest.fn();
        renderTextField({ onChange: handleChange });

        const input = screen.getByLabelText('Label');
        fireEvent.change(input, { target: { value: 'Hello' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('applies the correct variant class', () => {
        const { container } = renderTextField({ variant: 'outlined' });
        expect(container.firstChild).toHaveClass('inputOutlined');
    });

    it('shows error class when error is true', () => {
        renderTextField({ error: true });
        const input = screen.getByLabelText('Label');
        expect(input).toHaveClass('error');
    });

    it('displays helper text when error is true', () => {
        renderTextField({ error: true, helperText: 'Invalid input' });
        expect(screen.getByText('Invalid input')).toBeInTheDocument();
    });

    it('disables input when readOnly is true', () => {
        renderTextField({ readOnly: true });
        const input = screen.getByLabelText('Label');
        expect(input).toHaveAttribute('readOnly');
    });

    it('sets input as required when required is true', () => {
        renderTextField({ required: true });
        const input = screen.getByLabelText('Label');
        expect(input).toBeRequired();
    });

    it('accepts different input types', () => {
        renderTextField({ type: 'password' });
        const input = screen.getByLabelText('Label');
        expect(input).toHaveAttribute('type', 'password');
    });

    it('focuses and blurs correctly', () => {
        renderTextField({ label: 'Test Label' });
        const input = screen.getByLabelText('Test Label');
        const label = screen.getByText('Test Label');

        fireEvent.focus(input);
        expect(label).toHaveClass('labelFocus');

        fireEvent.blur(input);
        expect(label).not.toHaveClass('labelFocus');
    })
});
