import css from './BenefitCard.module.css';

function BenefitCard({benefit: {icon, title, description}}) {
    return (
        <>
            <i className={`${css.item_icon} ${icon}`}></i>
            <h3 className={css.item_title}>{title}</h3>
            <p className={css.item_desc}>{description}</p>
        </>
    )
}

export default BenefitCard;