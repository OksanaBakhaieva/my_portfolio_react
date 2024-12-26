import css from './Header.module.css';

function HeaderTop() {
    return (
        <>
            <div className={css["header-top"]}>
                <form className={css["header-dropdown-list"]}>
                    <label htmlFor="header-choose-language">
                        <svg  className={css["header-earth"]} width="24" height="24">
                            <use xlinkHref="../../img/icons.svg#icon-earth"></use>
                        </svg>
                    </label>
                    <select id="header-choose-language" name="options">
                        <option className={css["header-lang"]} value="english">EN (UK)</option>
                        <option className={css["header-lang"]} value="ukrainian">UA</option>
                        <option className={css["header-lang"]} value="russian">RU</option>
                    </select>
                </form>
                <p className={css["header-text"]}>Availiable  in  <span className={css["header-span active"]}>English</span>  /  <span className={css["header-span"]}>Ukrainain</span>  /  <span className={css["header-span"]}>Russian</span></p>
                <address>
                    <a className={css["header-phone"]} href="tel:447748xxxxxx">
                        <svg  className={css["phone-icon"]} width="24" height="24">
                            <use xlinkHref="../../img/icons.svg#icon-phone"></use>
                        </svg>
                        + (44) 77 48 300 xxx</a>
                </address>    
            </div>
        </>
    )
}

export default HeaderTop;