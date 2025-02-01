import css from './ProjectCard.module.css';

function ProjectCard({name, img, desc, url }) {
    return (
        <>
            <img src={img} alt="Web Page of Photography School" className={css.item_img} width="230" />
            <a href={url} className={css.link}>
                
                <h3 className={css.item_title}>{name}</h3>
            </a>
            <p className={css.item_description}>{desc}</p>

        </>
       
    )
}

export default ProjectCard;