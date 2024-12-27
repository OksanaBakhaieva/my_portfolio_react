import css from './Benefits.module.css';
import BenefitCard from '../BenefitCard/BenefitCard';

function Benefits({benefits}) {
    return (
            <section className={css["benefits-section"]} id="benefits">
                <div className={css["benefits-container"]}>
                    <p className={css["benefits-quote"]}>Your ideas. My expertise</p>
                    <h2 className={css["benefits-title"]}>Why create with me?</h2>
                    <p className={css["benefits-text"]}>With a focus on delivering custom digital experiences, each project is tailored to bring unique visions to life.</p>
                    <p className={css["benefits-text-extra"]}>The approach combines creativity and functionality to develop engaging, user-friendly solutions that ensure a standout presence in the digital landscape.</p>
                    <ul className={css["benefits-list"]}>
                    {benefits.map((benefit) => (
                            <li key={benefit.id} className={css["benefits-item"]}>
                                <BenefitCard benefit={benefit} />
                            </li>
                    ))}
                    </ul>
                </div>
            </section>
    )
}

export default Benefits;