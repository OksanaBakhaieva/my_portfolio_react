import { useTranslation } from 'react-i18next';
import css from './ContactMe.module.css';

function ContactMe() {
    const { t } = useTranslation();

    return (
            <div className={css.wrapper}>
                <ul className={css.list}>
                    <li className={css.item1}>
                        <a className={css.phone} href="tel:447748300645">
                            <svg className={css.phone_icon} width="24" height="24">
                                <use xlinkHref="./img/icons.svg#icon-phone"></use>
                            </svg>
                        {t('contactMe.phone')}</a>
                    </li>
                    <li className={css.item2}>
                        <a className={css.email} href="mailto: obakhaieva@gmail.com">
                            <svg className={css.mail_icon} width="24" height="24">
                                <use xlinkHref="./img/icons.svg#icon-mail"></use>
                            </svg>
                             {t('contactMe.email')}</a>
                    </li>
                </ul>
            </div>
    )
}

export default ContactMe;