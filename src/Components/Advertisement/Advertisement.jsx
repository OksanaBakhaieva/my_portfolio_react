function Advertisement() {
    return (
        <>
            <section className="advertisement-section">
                <link
                    xlinkHref="https://fonts.googleapis.com/css?family=Pridi:600"
                    rel="stylesheet"
                />

                <div className="marquee">
                    <div className="marquee__inner">
                        <p className="marquee__line">
                            Ready to meet  
                            <span className="marquee__line-accent">your next</span>
                            developer?
                            <span className="marquee__line-accent">Let’s connect!</span>
                        </p>
                        <p className="marquee__line">
                            Ready to meet  
                            <span className="marquee__line-accent">your next</span>
                            developer?
                            <span className="marquee__line-accent">Let’s connect!</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advertisement;