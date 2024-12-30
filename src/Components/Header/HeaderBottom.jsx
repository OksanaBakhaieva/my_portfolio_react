import Nav from '../Nav/Nav';
import css from './HeaderBottom.module.css';

function HeaderBottom() {
    return (
            <div className={css.container}>
            <p className={css.logo}>Oksana Bakhaieva*</p>
                <div className={css.left_wrapper}>
                <Nav />
                </div>
                <div className={css.right_wrapper}>
                    <ul className={css.socials}>
                        <li>
                            <a className={css.socials_link} href="tel:380966402872" target="_blank">
                                <svg width="28" height="28">
                                    <use href="/img/icons.svg#icon-whatsapp"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css.socials_link} href="http://linkedin.com/in/oksana-b-frontend-developer" target="_blank">
                                <svg width="28" height="28">
                                    <use href="/img/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css.socials_link} href="https://github.com/OksanaBakhaieva" target="_blank">
                                <svg width="28" height="28">
                                    <use href="/img/icons.svg#icon-github"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <button className={css.menu_open_button} type="button" id="menu-open">
                        <svg className={css.menu_open_icon} width="40" height="28">
                            <use  href="/img/icons.svg#icon-toggle"></use>
                        </svg>
                    </button>
                </div>
            </div>
    )
}

export default HeaderBottom;