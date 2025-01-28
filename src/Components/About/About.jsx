import { useTranslation } from 'react-i18next';
import img from '../../img/about-me/IMG_2597-1.jpg'
import Title from '../Title/Title';
import css from './About.module.css';

function About() {
    const { t } = useTranslation();
                    
    return (
        <section className={css.section} id="about">
            <div className={css.container}>
                    <div className={css.text_wrapper}>
                        <Title variant='primary'>{t('about.title')}</Title>
                        <p className={css.text1}>{t('about.text1')}</p>
                        <p className={css.text1}>{t('about.text2')}</p>
                        <p className={css.text2}>{t('about.text3')}</p>
                    </div>
                    <img className={css.img} src={img} alt="my-photo2" width="200" />
            </div>    
        </section>
    )
}

export default About;