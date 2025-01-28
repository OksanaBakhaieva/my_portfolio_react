import { useTranslation } from 'react-i18next';
import css from './Advertisement.module.css';

function Advertisement() {
    const { t } = useTranslation();
    
    return (
            <section className={css.section}>
                <link
                    xlinkHref="https://fonts.googleapis.com/css?family=Pridi:600"
                    rel="stylesheet"
                />

                <div className={css["marquee"]}>
                    <div className={css["marquee__inner"]}>
                        <p className={css["marquee__line"]}>
                            {t('advertisement.line')}  
                            <span className={css["marquee__line-accent"]}>  {t('advertisement.line_accent1')}   </span>
                             {t('advertisement.line_accent2')}
                            <span className={css["marquee__line-accent"]}>  {t('advertisement.line_accent3')} </span>
                        </p>
                        <p className={css["marquee__line"]}>
                              {t('advertisement.line')}   
                            <span className={css["marquee__line-accent"]}> {t('advertisement.line_accent1')} </span>
                            {t('advertisement.line_accent2')}
                            <span className={css["marquee__line-accent"]}> {t('advertisement.line_accent3')}</span>
                        </p>
                    </div>
                </div>
            </section>
    )
}

export default Advertisement;