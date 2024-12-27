import css from './Benefits.module.css';
import BenefitCard from '../BenefitCard/BenefitCard';

function Benefits({benefits}) {
    return (
            <section className={css.section} id="benefits">
                <div className={css.container}>
                    <p className={css.quote}>Your ideas. My expertise</p>
                    <h2 className={css.title}>Why create with me?</h2>
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