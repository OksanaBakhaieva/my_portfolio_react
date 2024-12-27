import css from './Footer.module.css';

function Footer() {
    return (
            <footer className={css["footer container"]} id="footer">
                <a className={css["footer-logo"]} href="#header" name="main-page">
                    <p>Oksana Bakhaieva*</p>
                </a>
                <div className={css["footer-wrapper"]}>
                    <a className={css["footer-phone"]} href="tel:447748xxxxxx">
                        + (44) 77 48 300 xxx
                    </a>
                    <a className={css["footer-email"]} href="mailto: example@gmail.com">obakhaieva@gmail.com</a>
                    <ul className={css["footer-socials"]}>
                        <li>
                            <a className={css["footer-socials-link"]} href="tel:380966402872" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="img/icons.svg#icon-whatsapp"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css["footer-socials-link"]} href="http://linkedin.com/in/oksana-b-frontend-developer" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="/img/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css["footer-socials-link"]} href="https://github.com/OksanaBakhaieva" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="/img/icons.svg#icon-github"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={css["footer-nav"]}>
                    <a className={css["footer-nav-link"]} href="#about" name="about">About me</a>
                    <a className={css["footer-nav-link"]} href="#portfolio" name="portfolio">portfolio</a>
                    <a className={css["footer-nav-link"]} href="#benefits" name="benefits">Why create with me</a>    
                </div>
                <p className={css["footer-copyright"]}>&copy; Copyright 2024</p>
            </footer>
    )
}

export default Footer;