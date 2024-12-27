import css from './BenefitCard.module.css';

function BenefitCard({benefit: {icon, title, description}}) {
    return (
        <>
            <i className={`${css["benefits-item-icon"]} ${icon}`}></i>
            <h3 className={css["benefits-item-title"]}>{title}</h3>
            <p className={css["benefits-item-desc"]}>{description}</p>
        </>
    )
}

export default BenefitCard;