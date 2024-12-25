function HeaderTop() {
    return (
        <>
            <div className="header-top">
                <form className="header-dropdown-list">
                    <label htmlFor="header-choose-language">
                        <svg  className="header-earth" width="24" height="24">
                            <use xlinkHref="./img/icons.svg#icon-earth"></use>
                        </svg>
                    </label>
                    <select id="header-choose-language" name="options">
                        <option className="header-lang" value="english">EN (UK)</option>
                        <option className="header-lang" value="ukrainian">UA</option>
                        <option className="header-lang" value="russian">RU</option>
                    </select>
                </form>
                <p className="header-text">Availiable  in  <span className="header-span active">English</span>  /  <span className="header-span">Ukrainain</span>  /  <span className="header-span">Russian</span></p>
                <address>
                    <a className="header-phone" xlinkHref="tel:447748xxxxxx">
                        <svg  className="phone-icon" width="24" height="24">
                            <use xlinkHref="./img/icons.svg#icon-phone"></use>
                        </svg>
                        + (44) 77 48 300 645</a>
                </address>    
            </div>
        </>
    )
}

export default HeaderTop;