import ProjectCard from '../ProjectCard/ProjectCard';
import css from './Projects.module.css';

function Projects({ projects }) {
    return (
            <section className={css["projects-section"]} id="projects" aria-labelledby="projects-title">
                <div className={css["projects-container container"]}>
                    <h2 id="projects-title" className={css["projects-title"]}>Projects</h2>
                    <p className={css["projects-quote"]}>
                        The only way to do great work is to love what you do. - Albert Einstein
                    </p>
                    <div className={css["projects-gallery"]}>
                        <ul className={css["projects-list"]}>
                            {projects.map((project) => (
                                <li key={project.id} className={css["projects-item"]}>
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