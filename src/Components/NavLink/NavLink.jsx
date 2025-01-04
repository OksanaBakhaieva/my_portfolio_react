import css from './NavLink.module.css';

function NavLink({ text, href }) {
    return (
        <>
            <a className={css.nav_link} href={href}>{text}</a>
        </>
    )
}

export default NavLink;