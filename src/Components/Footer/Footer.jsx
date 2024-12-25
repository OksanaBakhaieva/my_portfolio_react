function Footer() {
    return (
        <>
            <footer className="footer container" id="footer">
                <a className="footer-logo" xlinkHref="#header" name="main-page">
                    <p>Oksana Bakhaieva*</p>
                </a>
                <div className="footer-wrapper">
                    <a className="footer-phone" xlinkHref="tel:447748xxxxxx">
                        + (44) 77 48 300 645
                    </a>
                    <a className="footer-email" xlinkHref="mailto: example@gmail.com">obakhaieva@gmail.com</a>
                    <ul className="footer-socials">
                        <li>
                            <a className="footer-socials-link" xlinkHref="tel:380966402872" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="./img/icons.svg#icon-whatsapp"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="footer-socials-link" xlinkHref="http://linkedin.com/in/oksana-b-frontend-developer" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="./img/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="footer-socials-link" xlinkHref="https://github.com/OksanaBakhaieva" target="_blank">
                                <svg width="28" height="28">
                                    <use xlinkHref="./img/icons.svg#icon-github"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <a className="footer-nav-link" xlinkHref="#about" name="about">About me</a>
                    <a className="footer-nav-link" xlinkHref="#portfolio" name="portfolio">portfolio</a>
                    <a className="footer-nav-link" xlinkHref="#benefits" name="benefits">Why create with me</a>    
                </div>
                <p className="footer-copyright">&copy; Copyright 2024</p>
            </footer>
        </>
    )
}

export default Footer;