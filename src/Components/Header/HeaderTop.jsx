import css from './HeaderTop.module.css';

function HeaderTop() {
    return (
            <div className={css.header_top_container}>
                <form className={css.dropdown_list}>
                    <label htmlFor="header-choose-language">
                        <svg  className={css.earth} width="24" height="24">
                            <use href="../../img/icons.svg#icon-earth"></use>
                        </svg>
                    </label>
                    <select id="header-choose-language" name="options">
                        <option className={css.lang} value="english">EN (UK)</option>
                        <option className={css.lang} value="ukrainian">UA</option>
                        <option className={css.lang} value="russian">RU</option>
                    </select>
                </form>
                <p className={css.text}>Availiable  in  <span className={css.span}>English</span>  /  <span className={css.span}>Ukrainain</span>  /  <span className={css.span}>Russian</span></p>
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