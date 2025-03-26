import React from 'react';
import style from './Modal.module.scss';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ children, title, open, onClose }) => {
    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return open ? (
        <div className={style.modalWrapper} onClick={onClose}>
            <div className={style.modalContent} onClick={handleModalClick}>
                <div className={style.modalHeader}>
                    <h3 className={style.modalTitle}>{title}</h3>
                    <button
                        className={style.modalButtonClose}
                        onClick={onClose}
                    >
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 16 16"
                            className="bi bi-x"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    ) : null;
};

export default Modal;
