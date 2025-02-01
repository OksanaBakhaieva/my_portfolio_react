import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import css from './HeaderTop.module.css';

function HeaderTop() {
    return (
        <div className={css.header_top_container}>
             <svg  className={css.earth} width="24" height="24">
                <use href="../../img/icons.svg#icon-earth"></use>
            </svg>
            <LanguageSwitcher /> 
            <a className={css.phone} href="tel:447748300645">
                <svg  className={css.phone_icon} width="24" height="24">
                    <use href="../../img/icons.svg#icon-phone"></use>
                </svg>
            </a>
        </div>
    )
}

export default HeaderTop;