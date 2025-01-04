import ProjectCard from '../ProjectCard/ProjectCard';
import Quote from '../Quote/Quote';
import Title from '../Title/Title';
import css from './Projects.module.css';

function Projects({ projects }) {
    return (
        <section className={css.section} id="projects" aria-labelledby="projects-title">
            <div className={css.container}>
                <Quote>The only way to do great work is to love what you do. - Albert Einstein</Quote>
                <Title variant='secondary'>Projects</Title>
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