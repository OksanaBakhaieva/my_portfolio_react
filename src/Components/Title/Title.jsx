import clsx from 'clsx';
import css from './Title.module.css';

function Title({ variant, children }) {
    const titleClasses = clsx(css.title, css[variant]);

    return (
        <>
            <h2 className={titleClasses}>{children}</h2>
        </>
    )
}

export default Title;