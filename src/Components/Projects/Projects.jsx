import ProjectCard from '../ProjectCard/ProjectCard';
import css from './Projects.module.css';

function Projects({ projects }) {
    return (
            <section className={css.section} id="projects" aria-labelledby="projects-title">
                <div className={css.container}>
                    <h2 id="projects-title" className={css.title}>Projects</h2>
                    <p className={css.quote}>
                        The only way to do great work is to love what you do. - Albert Einstein
                    </p>
                    <div className={css.gallery}>
                        <ul className={css.list}>
                            {projects.map((project) => (
                                <li key={project.id} className={css.item}>
                                    <ProjectCard project={project} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default Projects;