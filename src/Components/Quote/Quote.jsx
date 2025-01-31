import { clsx } from 'clsx';
import css from './Quote.module.css';
import { useTranslation } from 'react-i18next';

function Quote({ children }) {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const QuoteClasses = clsx(
        css.quote,
        { [css.quote_cyrillic]: currentLang === 'uk' || currentLang === 'ru'}
        );

    return (
        <>
            <p className={QuoteClasses}>{children}</p>
        </>
    )
}

export default Quote;