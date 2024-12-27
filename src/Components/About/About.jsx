import img from '../../img/about-me/IMG_2597-1.jpg'
import css from './About.module.css';

function About() {
    return (
        <section className={css["about-section"]} id="about">
            <div className={css["about-container"]}>
                    <div className={css["about-text-wrapper"]}>
                        <h2 className={css["about-title"]}>About Me</h2>
                        <p className={css["about-text1"]}>
                            Motivated and adaptable software developer with a strong passion for building innovative web and mobile applications. 
                        </p>
                        <p className={css["about-text1"]}>
                            Experienced with technologies such as ReactJS, Node.js, PHP, MySQL, JavaScript, TypeScript, CSS and Tailwind CSS, I enjoy solving real-world problems and turning ideas into practical solutions.
                        </p>
                        <p className={css["about-text2"]}>
                            Eager to learn and grow, I am excited to contribute to a collaborative team and take on new challenges while developing my skills.
                        </p>
                    </div>
                    <img className={css["about-img"]} src={img} alt="my-photo2" width="200" />
            </div>    
        </section>
    )
}

export default About;