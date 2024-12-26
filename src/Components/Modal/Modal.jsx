import css from './Modal.module.css';

function Modal() {
    <div className={css["modal"]}>
        <div className={css["modal-content"]}>
            <h2 className={css["visually-hidden"]}>Navigation</h2>
            <nav className={css["modal-nav"]}>
                <a className={css["nav-link"]} href="#about" name="about">About me</a>
                <a className={css["nav-link"]} href="#portfolio" name="portfolio">Portfolio</a>
                <a className={css["nav-link"]} href="#benefits" name="benefits">Why create with me</a>
                <a className={css["nav-link"]} href="#footer" name="footer">Contacts</a>
            </nav>
            <button className={css["modal-close-button"]} id="modal-close" type="button" aria-label="modal-close-button">
                <svg className={css["modal-close-icon"]} width="16" height="16">
                    <use xlinkHref="./img/icons.svg#icon-close"></use>
                </svg>
            </button>
        </div>    
    </div>
} 

export default Modal;