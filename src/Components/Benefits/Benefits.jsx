import Title from '../Title/Title';
import BenefitCard from '../BenefitCard/BenefitCard';
import Quote from '../Quote/Quote';
import css from './Benefits.module.css';


function Benefits({benefits}) {
    return (
            <section className={css.section} id="benefits">
                <div className={css.container}>
                    <Quote>Your ideas. My expertise</Quote>
                    <Title variant='primary'>Why create with me?</Title>
                    <p className={css.text}>With a focus on delivering custom digital experiences, each project is tailored to bring unique visions to life.</p>
                    <p className={css.text_extra}>The approach combines creativity and functionality to develop engaging, user-friendly solutions that ensure a standout presence in the digital landscape.</p>
                    <ul className={css.list}>
                    {benefits.map((benefit) => (
                            <li key={benefit.id} className={css.item}>
                                <BenefitCard benefit={benefit} />
                            </li>
                    ))}
                    </ul>
                </div>
            </section>
    )
}

export default Benefits;