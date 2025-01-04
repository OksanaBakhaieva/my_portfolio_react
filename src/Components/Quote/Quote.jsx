import css from './Quote.module.css';

function Quote({ children }) {
    return (
        <>
            <p className={css.quote}>{children}</p>
        </>
    )
}

export default Quote;