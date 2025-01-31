import NavLink from '../NavLink/NavLink';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import css from './Nav.module.css';

function Nav({ variant }) {
    const NavClasses = clsx(css.nav,
        {
            [css.header]: variant === 'header',
            [css.modal]: variant === 'modal',
            [css.footer]: variant === 'footer'
        }
    );
    const { t } = useTranslation();

    return (
            <nav className={NavClasses}>
                <NavLink text={t('nav.link1')} href="#about" />
                <NavLink text={t('nav.link2')} href="#projects"/>
                <NavLink text={t('nav.link3')} href="#benefits"/>
                {variant !== 'footer' && <NavLink text={t('nav.link4')} href="#footer" variant={variant} />}
            </nav>
    )
}

export default Nav;