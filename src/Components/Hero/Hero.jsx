import css from './Hero.module.css';

function Hero() {
    return (
        <>
            <section className={css["hero-section"]}> 
                <div className={css["hero-container"]}>
                    <h1 className={css["hero-title"]}>Full-Stack Developer:<br />Turning Ideas into Code</h1>
                </div>
            </section>
        </>
    )
}

export default Hero;