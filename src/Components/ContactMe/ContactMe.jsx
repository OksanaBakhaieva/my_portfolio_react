import css from './ContactMe.module.css';

function ContactMe() {
    return (
        <>
            <div className={css["contact-me"]}>
                <h2 className={css["visually-hidden"]}>Contact me</h2>
                <ul className={css["contact-me-list"]}>
                    <li className={css["contact-me-item1"]}>
                        <a className={css["contact-me-phone"]} href="tel:447748300645">
                            <svg className={css["contact-me-phone-icon"]} width="24" height="24">
                                <use xlinkHref="./img/icons.svg#icon-phone"></use>
                            </svg>
                            Talk  to  me</a>
                    </li>
                    <li className={css["contact-me-item2"]}>
                        <a className={css["contact-me-email"]} href="mailto: obakhaieva@gmail.com">
                            <svg className={css["contact-me-mail-icon"]} width="24" height="24">
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