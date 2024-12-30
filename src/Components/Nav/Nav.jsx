import NavLink from '../NavLink/NavLink';
import css from './Nav.module.css';

function Nav() {
    return (
            <nav className={css.nav}>
                <NavLink text="About Me" href="#about" />
                <NavLink text="Projects" href="#projects"/>
                <NavLink text="Why create with me?" href="#benefits"/>
                <NavLink text="Contacts" href="#footer" />
            </nav>
    )
}

export default Nav;