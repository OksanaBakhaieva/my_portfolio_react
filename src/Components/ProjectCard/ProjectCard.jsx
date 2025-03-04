import css from './ProjectCard.module.css';

function ProjectCard({name, img, desc, url }) {
    return (
        <>
            <a href={url} className={css.link}>
                    <img src={img} alt="Web Page of Photography School" className={css.item_img} width="" target="_blank" />
                    <h3 className={css.item_title}>{name}</h3>
            </a>
            <p className={css.item_description}>{desc}</p>
        </>
       
    )
}

export default ProjectCard;