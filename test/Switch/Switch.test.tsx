import { render, screen, fireEvent } from '@testing-library/react';
import Switch, { SwitchProps } from '../../src/components/Switch/Switch';
import React from 'react';

describe('Switch Component', () => {
    const renderSwitch = (props?: Partial<SwitchProps>) => {
        return render(
            <Switch
                checked={props?.checked ?? false}
                disabled={props?.disabled ?? false}
                size={props?.size ?? 'medium'}
                color={props?.color ?? ''}
                onChange={props?.onChange ?? (() => {})}
            />
        );
    };

    it('renders without crashing', () => {
        renderSwitch();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with the correct initial checked state', () => {
        renderSwitch({ checked: true });
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
    });

    it('calls onChange when toggled', () => {
        const handleChange = jest.fn();
        renderSwitch({ onChange: handleChange });

        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('does not change state when disabled', () => {
        const handleChange = jest.fn();
        renderSwitch({ checked: false, disabled: true, onChange: handleChange });

        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);
        expect(handleChange).not.toHaveBeenCalled();
        expect(checkbox).toBeDisabled();
    });

    it('applies correct size class', () => {
        renderSwitch({ size: 'small' });
        const slider = screen.getByRole('checkbox').nextSibling;
        expect(slider).toHaveClass('small');
    });

    it('applies correct color class', () => {
        renderSwitch({ color: 'orange' });
        const slider = screen.getByRole('checkbox').nextSibling;
        expect(slider).toHaveClass('switchOrange');
    });

    it('renders with default medium size', () => {
        renderSwitch({ size: 'medium' });
        const slider = screen.getByRole('checkbox').nextSibling;
        expect(slider).toHaveClass('medium');
    });

    it('renders with default color when color is not provided', () => {
        const { container } = renderSwitch();
        expect(container.firstChild).not.toHaveClass('switchOrange');
        expect(container.firstChild).not.toHaveClass('switchPurple');
    });
});
