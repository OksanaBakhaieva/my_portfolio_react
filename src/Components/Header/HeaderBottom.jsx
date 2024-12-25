function HeaderBottom() {
    return (
        <>
            <div className="header-bottom">
                <p className="header-logo">Oksana Bakhaieva*</p>
                <div className="header-left-wrapper">
                    <nav className="header-nav">
                        <a className="nav-link" xlinkHref="#about" name="about">About me</a>
                        <a className="nav-link" xlinkHref="#portfolio" name="portfolio">portfolio</a>
                        <a className="nav-link" xlinkHref="#benefits" name="benefits">Why create with me</a>
                        <a className="nav-link" xlinkHref="#footer" name="footer">Contacts</a>
                    </nav>
                </div>
                <div className="header-right-wrapper">
                    <ul className="header-socials">
                        <li>
                            <a className="header-socials-link" xlinkHref="tel:380966402872" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="./img/icons.svg#icon-whatsapp"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="header-socials-link" xlinkHref="http://linkedin.com/in/oksana-b-frontend-developer" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="./img/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="header-socials-link" xlinkHref="https://github.com/OksanaBakhaieva" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="./img/icons.svg#icon-github"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <button className="menu-open-button" type="button" id="menu-open">
                        <svg className="menu-open-icon" width="40" height="28">
                            <use  xlinkHref="./img/icons.svg#icon-toggle"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeaderBottom;