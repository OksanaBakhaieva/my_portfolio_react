import css from './ProjectCard.module.css';

function ProjectCard({
    project: { name, img, desc, url },
}) {
    return (
        <>
            <a href={url} className={css.link} target="_blank">
                <img src={img} alt="Web Page of Photography School" className={css.item_img} width="230" />
                <h3 className={css.item_title}>{name}</h3>
            </a>
            <p className={css.item_description}>{desc}</p>

        </>
       
    )
}

export default ProjectCard;