import Nav from '../Nav/Nav';
import css from './Footer.module.css';

function Footer() {
    return (
            <footer className={css.container} id="footer">
                <a className={css.logo} href="#header" name="main-page">
                    <p>Oksana Bakhaieva*</p>
                </a>
                <div className={css.wrapper}>
                   
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
            <Nav variant='footer'/>
            <p className={css.copyright}>&copy; Copyright 2024</p>
            </footer>
    )
}

export default Footer;