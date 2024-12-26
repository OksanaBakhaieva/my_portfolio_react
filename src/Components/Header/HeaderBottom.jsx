import css from './Header.module.css';

function HeaderBottom() {
    return (
        <>
            <div className={css["header-bottom"]}>
                <p className={css["header-logo"]}>Oksana Bakhaieva*</p>
                <div className={css["header-left-wrapper"]}>
                    <nav className={css["header-nav"]}>
                        <a className={css["nav-link"]} href="#about" name="about">About me</a>
                        <a className={css["nav-link"]} href="#portfolio" name="portfolio">portfolio</a>
                        <a className={css["nav-link"]} href="#benefits" name="benefits">Why create with me</a>
                        <a className={css["nav-link"]} href="#footer" name="footer">Contacts</a>
                    </nav>
                </div>
                <div className={css["header-right-wrapper"]}>
                    <ul className={css["header-socials"]}>
                        <li>
                            <a className={css["header-socials-link"]} href="tel:380966402872" target="_blank">
                                <svg width="28" height="28">
                                    <use href="../../img/icons.svg#icon-whatsapp"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css["header-socials-link"]} href="http://linkedin.com/in/oksana-b-frontend-developer" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="../../img/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css["header-socials-link"]} href="https://github.com/OksanaBakhaieva" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="../../img/icons.svg#icon-github"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <button className={css["menu-open-button"]} type="button" id="menu-open">
                        <svg className={css["menu-open-icon"]} width="40" height="28">
                            <use  xlinkHref="../../img/icons.svg#icon-toggle"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeaderBottom;