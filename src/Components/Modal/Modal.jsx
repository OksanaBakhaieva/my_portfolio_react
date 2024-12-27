import css from './Modal.module.css';

function Modal() {
    <div className={css.modal}>
        <div className={css.content}>
            <h2 className={css.visually_hidden}>Navigation</h2>
            <nav className={css.nav}>
                <a className={css.nav_link} href="#about" name="about">About me</a>
                <a className={css.nav_link} href="#portfolio" name="portfolio">Portfolio</a>
                <a className={css.nav_link} href="#benefits" name="benefits">Why create with me</a>
                <a className={css.nav_link} href="#footer" name="footer">Contacts</a>
            </nav>
            <button className={css.close_button} id="modal-close" type="button" aria-label="modal-close-button">
                <svg className={css.close_icon} width="16" height="16">
                    <use href="./img/icons.svg#icon-close"></use>
                </svg>
            </button>
        </div>    
    </div>
} 

export default Modal;