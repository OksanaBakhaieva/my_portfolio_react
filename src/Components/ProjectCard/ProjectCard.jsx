import css from './ProjectCard.module.css';

function ProjectCard({
    project: { name, img, desc, url },
}) {
    return (
        <a href={url} className={css["projects-link"]} target="_blank">
            <img src={img} alt="Web Page of Photography School" className={css["projects-img"]} width="230" />
            <h3 className={css["projects-item-title"]}>{name}</h3>
            <p className={css["projects-item-description"]}>{desc}</p>
        </a>
    )
}

export default ProjectCard;