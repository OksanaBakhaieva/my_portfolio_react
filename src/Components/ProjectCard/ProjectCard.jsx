import css from './ProjectCard.module.css';

function ProjectCard({name, desc, url }) {
    return (
        <>
            <div className={css.link}>
                <iframe src={url} className={css.project_preview}></ iframe>
                <a href={url} className={css.item_title} target="_blank">{name}</a>
            </div>
            <p className={css.item_description}>{desc}</p>
           
        </>
    )
}

export default ProjectCard;