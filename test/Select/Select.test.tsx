import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../../src/components/Select/Select';
import React from 'react';

describe('Select Component', () => {
    it('renders with label and options', () => {
        render(
            <Select
                label="Fruits"
                value=""
                onChange={() => {}}
                options={['Apple', 'Kivi', 'Banana', 'Orange', 'Mango']}
            />
        );

        expect(screen.getByText('Fruits')).toBeInTheDocument();
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Kivi')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
    });

    it('updates value on change', () => {
        render(
            <Select
                label="Fruits"
                value=""
                onChange={() => {}}
                options={['Apple', 'Kivi', 'Banana', 'Orange', 'Mango']}
            />
        );

        const select = screen.getByRole('combobox');

        fireEvent.change(select, { target: { value: 'Apple' } });
        // @ts-ignore
        expect(select.value).toBe('Apple');
    });

    it('should focus the label when select is focused', () => {
        render(
            <Select
                label="Fruits"
                value=""
                onChange={() => {}}
                options={['Apple', 'Kivi', 'Banana', 'Orange', 'Mango']}
            />
        );

        const select = screen.getByRole('combobox');

        fireEvent.focus(select);

        const label = screen.getByText('Fruits');
        expect(label).toHaveClass('labelFocus');
    });

    it('should display label above when value is set', () => {
        render(
            <Select
                label="Fruits"
                value="Apple"
                onChange={() => {}}
                options={['Apple', 'Kivi', 'Banana', 'Orange', 'Mango']}
            />
        );

        const label = screen.getByText('Fruits');
        expect(label).toHaveClass('labelUp');
    });

    it('does not allow interaction when disabled', () => {
        render(
            <Select
                label="Fruits"
                value=""
                onChange={() => {}}
                options={['Apple', 'Kivi', 'Banana', 'Orange', 'Mango']}
                disabled
            />
        );

        const select = screen.getByRole('combobox');
        expect(select).toBeDisabled();
    });

    it('should handle custom onChange event', () => {
        const handleChange = jest.fn();

        render(
            <Select
                label="Fruits"
                value=""
                options={['Apple', 'Kivi', 'Banana', 'Orange', 'Mango']}
                onChange={handleChange}
            />
        );

        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'Apple' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});