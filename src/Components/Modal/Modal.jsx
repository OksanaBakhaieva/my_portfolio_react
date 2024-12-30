import Nav from '../Nav/Nav';
import css from './Modal.module.css';

function Modal() {
    <div className={css.modal}>
        <div className={css.content}>
            <Nav />
            <button className={css.close_button} id="modal-close" type="button" aria-label="modal-close-button">
                <svg className={css.close_icon} width="16" height="16">
                    <use href="./img/icons.svg#icon-close"></use>
                </svg>
            </button>
        </div>    
    </div>
} 

export default Modal;