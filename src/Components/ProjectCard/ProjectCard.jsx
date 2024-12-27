import css from './ProjectCard.module.css';

function ProjectCard({
    project: { name, img, desc, url },
}) {
    return (
        <>
            <a href={url} className={css["projects-link"]} target="_blank">
                <img src={img} alt="Web Page of Photography School" className={css["projects-item-img"]} width="230" />
                <h3 className={css["projects-item-title"]}>{name}</h3>
            </a>
            <p className={css["projects-item-description"]}>{desc}</p>

        </>
       
    )
}

export default ProjectCard;