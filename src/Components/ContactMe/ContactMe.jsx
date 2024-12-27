import css from './ContactMe.module.css';

function ContactMe() {
    return (
            <div className={css.wrapper}>
                <ul className={css.list}>
                    <li className={css.item1}>
                        <a className={css.phone} href="tel:447748300645">
                            <svg className={css.phone_icon} width="24" height="24">
                                <use xlinkHref="./img/icons.svg#icon-phone"></use>
                            </svg>
                            Talk  to  me</a>
                    </li>
                    <li className={css.item2}>
                        <a className={css.email} href="mailto: obakhaieva@gmail.com">
                            <svg className={css.mail_icon} width="24" height="24">
                                <use xlinkHref="./img/icons.svg#icon-mail"></use>
                            </svg>
                            Mail  me  now</a>
                    </li>
                </ul>
            </div>
    )
}

export default ContactMe;