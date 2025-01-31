import ProjectCard from '../ProjectCard/ProjectCard';
import Quote from '../Quote/Quote';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';
import css from './Projects.module.css';

function Projects({ projects }) {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language; 

    return (
        <section className={css.section} id="projects" aria-labelledby="projects-title">
            <div className={css.container}>
                <Quote>{t('projects.quote')}</Quote>
                <Title variant='secondary'>{t('projects.title')}</Title>
                <div className={css.gallery}>
                        <ul className={css.list}>
                            {projects.map(({id, name, img, lang, url}) => (
                            <li key={id} className={css.item}>
                                    <ProjectCard
                                        name={name}
                                        img={img}
                                        desc={lang[currentLang].desc}
                                        url={url}
                                    />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects;