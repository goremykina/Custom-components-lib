import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../../src/components/Modal/Modal';

describe("Modal Component", () => {
    const title = "Test Modal";
    const onCloseMock = jest.fn();
    const childrenContent = "This is modal content";

    test("renders when open is true", () => {
        render(
            <Modal open={true} title={title} onClose={onCloseMock}>
                {childrenContent}
            </Modal>
        );
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(childrenContent)).toBeInTheDocument();
    });

    test("does not render when open is false", () => {
        render(
            <Modal open={false} title={title} onClose={onCloseMock}>
                {childrenContent}
            </Modal>
        );
        expect(screen.queryByText(title)).not.toBeInTheDocument();
        expect(screen.queryByText(childrenContent)).not.toBeInTheDocument();
    });

    test("calls onClose when clicking outside the modal", () => {
        render(
            <Modal open={true} title={title} onClose={onCloseMock}>
                {childrenContent}
            </Modal>
        );
        fireEvent.click(screen.getByTestId("modal-wrapper"));
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    test("calls onClose when clicking the close button", () => {
        render(
            <Modal open={true} onClose={onCloseMock} title="Test Modal">
                <p>Modal Content</p>
            </Modal>
        );

        fireEvent.click(screen.getByTestId("close-button"));
        expect(onCloseMock).toHaveBeenCalledTimes(2);
    });
});