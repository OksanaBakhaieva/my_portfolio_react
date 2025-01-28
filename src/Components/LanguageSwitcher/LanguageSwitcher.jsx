import i18n from 'i18next';
import css from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
    const setLanguage = (lang) => {
        i18n.changeLanguage(lang);
   }
    
    return (
        <div className={css.languageSwitcher}>
            <svg  className={css.earth} width="24" height="24">
                <use href="../../img/icons.svg#icon-earth"></use>
            </svg>
        
            <p className={css.text}>Availiable  in  
                <button className={css.span} onClick={() => setLanguage("en")}>English  /</button>
                <button className={css.span} onClick={() => setLanguage("uk")}>Ukrainain  /</button>
                <button className={css.span} onClick={() => setLanguage("ru")}>Russian</button>
            </p>
        </div>
    )
}

export default LanguageSwitcher;