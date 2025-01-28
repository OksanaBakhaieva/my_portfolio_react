import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import css from './HeaderTop.module.css';

function HeaderTop() {
    return (
            <div className={css.header_top_container}>
                <LanguageSwitcher /> 
                <address>
                    <a className={css.phone} href="tel:447748xxxxxx">
                        <svg  className={css.phone_icon} width="24" height="24">
                            <use href="../../img/icons.svg#icon-phone"></use>
                        </svg>
                        + (44) 77 48 300 xxx</a>
                </address>    
            </div>
    )
}

export default HeaderTop;