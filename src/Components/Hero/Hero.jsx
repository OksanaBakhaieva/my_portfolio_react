import { useTranslation } from 'react-i18next';
import css from './Hero.module.css';

function Hero() {
    const { t } = useTranslation();

    return (
            <section className={css.section}> 
                <div className={css.container}>
                <h1 className={css.title}>{t('hero.title1')}<br />{t('hero.title2')}</h1>
                </div>
            </section>
    )
}

export default Hero;