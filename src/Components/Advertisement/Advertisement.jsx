import css from './Advertisement.module.css';

function Advertisement() {
    return (
            <section className={css["advertisement-section"]}>
                <link
                    xlinkHref="https://fonts.googleapis.com/css?family=Pridi:600"
                    rel="stylesheet"
                />

                <div className={css["marquee"]}>
                    <div className={css["marquee__inner"]}>
                        <p className={css["marquee__line"]}>
                            Ready to meet  
                            <span className={css["marquee__line-accent"]}> your next </span>
                            developer?
                            <span className={css["marquee__line-accent"]}> Let’s connect! </span>
                        </p>
                        <p className={css["marquee__line"]}>
                            Ready to meet  
                            <span className={css["marquee__line-accent"]}> your next </span>
                            developer?
                            <span className={css["marquee__line-accent"]}> Let’s connect! </span>
                        </p>
                    </div>
                </div>
            </section>
    )
}

export default Advertisement;