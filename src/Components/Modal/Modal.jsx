function Modal() {
    <div className="modal">
        <div className="modal-content">
            <h2 className="visually-hidden">Navigation</h2>
            <nav className="modal-nav">
                <a className="nav-link" href="#about" name="about">About me</a>
                <a className="nav-link" href="#portfolio" name="portfolio">Portfolio</a>
                <a className="nav-link" href="#benefits" name="benefits">Why create with me</a>
                <a className="nav-link" href="#footer" name="footer">Contacts</a>
            </nav>
            <button className="modal-close-button" id="modal-close" type="button" aria-label="modal-close-button">
                <svg className="modal-close-icon" width="16" height="16">
                    <use href="./img/icons.svg#icon-close"></use>
                </svg>
            </button>
        </div>    
    </div>
} 

export default Modal;