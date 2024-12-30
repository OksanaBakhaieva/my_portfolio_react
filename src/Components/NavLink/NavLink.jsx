import css from './NavLink.module.css';

function NavLink({ text }) {
    return (
        <>
            <h3 className={css.nav_link}>{text}</h3>
        </>
    )
}

export default NavLink;