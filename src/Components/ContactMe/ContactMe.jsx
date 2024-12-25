function ContactMe() {
    return (
        <>
            <div className="contact-me">
                <h2 className="visually-hidden">Contact me</h2>
                <ul className="contact-me-list">
                    <li className="contact-me-item1">
                        <a className="contact-me-phone" xlinkHref="tel:447748300645">
                            <svg  className="contact-me-phone-icon" width="24" height="24">
                                <use xlinkHref="./img/icons.svg#icon-phone"></use>
                            </svg>
                            Talk  to  me</a>
                    </li>
                    <li className="contact-me-item2">
                        <a className="contact-me-email" xlinkHref="mailto: obakhaieva@gmail.com">
                            <svg  className="contact-me-mail-icon" width="24" height="24">
                                <use xlinkHref="./img/icons.svg#icon-mail"></use>
                            </svg>
                            Mail  me  now</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ContactMe;