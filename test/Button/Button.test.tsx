import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button/Button';

describe('Button Component', () => {
    test('renders the button with the correct label', () => {
        render(<Button label="Click me" variant="contained" size="medium" isDisabled={false} />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button label="Click me" variant="contained" size="medium" isDisabled={false} onClick={handleClick} />);

        fireEvent.click(screen.getByText('Click me'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('disables button when isDisabled is true', () => {
        render(<Button label="Click me" variant="contained" size="medium" isDisabled={true} />);

        const button = screen.getByText('Click me');
        expect(button).toBeDisabled();
    });

    test('disables button when isLoading is true', () => {
        render(<Button label="Click me" variant="contained" size="medium" isLoading={true} isDisabled={false} />);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    test('shows loading spinner when isLoading is true', () => {
        render(<Button label="Click me" variant="contained" size="medium" isLoading={true} isDisabled={false} />);

        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    test('applies correct variant class', () => {
        const { container } = render(<Button label="Click me" variant="outlined" size="medium" isDisabled={false} />);

        expect(container.firstChild).toHaveClass('buttonOutlined');
    });

    test('applies correct size class', () => {
        const { container } = render(<Button label="Click me" variant="contained" size="large" isDisabled={false} />);

        expect(container.firstChild).toHaveClass('buttonLarge');
    });

    test('applies correct color class', () => {
        const { container } = render(<Button label="Click me" variant="contained" size="medium" color="success" isDisabled={false} />);

        expect(container.firstChild).toHaveClass('buttonSuccess');
    });

    test('applies multiple classes correctly', () => {
        const { container } = render(<Button label="Click me" variant="contained" size="small" color="error" isDisabled={true} isLoading={true} />);

        expect(container.firstChild).toHaveClass('button', 'buttonContained', 'buttonSmall', 'buttonError', 'disabled', 'loading');
    });
});
