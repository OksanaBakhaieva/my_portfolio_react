import NavLink from '../NavLink/NavLink';
import clsx from 'clsx';
import css from './Nav.module.css';

function Nav({variant}) {
    const NavClasses = clsx(css.nav, css[variant]);
    
    return (
            <nav className={NavClasses}>
                <NavLink text="About Me" href="#about" />
                <NavLink text="Projects" href="#projects"/>
                <NavLink text="Why create with me?" href="#benefits"/>
                <NavLink text="Contacts" href="#footer" />
            </nav>
    )
}

export default Nav;