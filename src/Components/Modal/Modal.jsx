import css from './Modal.module.css';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={css.modal} onClick={onClose}>
            <div className={css.content} onClick= {(e)=>e.stopPropagation()}>
                {children}
                <button className={css.close_button} onClick={onClose} type="button" aria-label="modal-close-button">
                <svg className={css.close_icon} width="16" height="16">
                    <use href="./img/icons.svg#icon-close"></use>
                </svg>
            </button>
        </div>    
    </div>
    )
   
} 

export default Modal;