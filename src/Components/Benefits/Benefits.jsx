import { useTranslation } from 'react-i18next';
import Title from '../Title/Title';
import BenefitCard from '../BenefitCard/BenefitCard';
import Quote from '../Quote/Quote';
import css from './Benefits.module.css';


function Benefits({ benefits }) {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language; 
    
    return (
            <section className={css.section} id="benefits">
                <div className={css.container}>
                <Quote>{ t('benefits.quote')}</Quote>
                    <Title variant='primary'>{ t('benefits.title')}</Title>
                    <p className={css.text}>{ t('benefits.text')}</p>
                    <p className={css.text_extra}>{ t('benefits.text_extra')}</p>
                    <ul className={css.list}>
                        {benefits.map(({id, icon, lang}) => (
                            <li key={id} className={css.item}>
                                <BenefitCard
                                    icon={icon}
                                    title={lang[currentLang].title}
                                    description={lang[currentLang].description}
                                />
                            </li>
                    ))}
                    </ul>
                </div>
            </section>
    )
}

export default Benefits;