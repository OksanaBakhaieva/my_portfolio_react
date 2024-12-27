import css from './Footer.module.css';

function Footer() {
    return (
            <footer className={css.container} id="footer">
                <a className={css.logo} href="#header" name="main-page">
                    <p>Oksana Bakhaieva*</p>
                </a>
                <div className={css.wrapper}>
                    <a className={css.phone} href="tel:447748xxxxxx">
                        + (44) 77 48 300 xxx
                    </a>
                    <a className={css.email} href="mailto: example@gmail.com">obakhaieva@gmail.com</a>
                    <ul className={css.socials}>
                        <li>
                            <a className={css.socials_link} href="tel:380966402872" target="_blank">
                                <svg width="28" height="28">
                                    <use href="img/icons.svg#icon-whatsapp"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css.socials_link} href="http://linkedin.com/in/oksana-b-frontend-developer" target="_blank">
                                <svg width="28" height="28">
                                    <use href="/img/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css.socials_link} href="https://github.com/OksanaBakhaieva" target="_blank">
                                <svg width="28" height="28">
                                    <use href="/img/icons.svg#icon-github"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={css.nav}>
                    <a className={css.nav_link} href="#about" name="about">About me</a>
                    <a className={css.nav_link} href="#portfolio" name="portfolio">portfolio</a>
                    <a className={css.nav_link} href="#benefits" name="benefits">Why create with me</a>    
                </div>
                <p className={css.copyright}>&copy; Copyright 2024</p>
            </footer>
    )
}

export default Footer;