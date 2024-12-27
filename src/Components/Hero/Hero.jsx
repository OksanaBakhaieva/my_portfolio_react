import css from './Hero.module.css';

function Hero() {
    return (
            <section className={css.section}> 
                <div className={css.container}>
                    <h1 className={css.title}>Full-Stack Developer:<br />Turning Ideas into Code</h1>
                </div>
            </section>
    )
}

export default Hero;