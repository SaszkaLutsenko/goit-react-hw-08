import style from './CustomNavLink.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ children, to, ...rest }) => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(style.link, isActive && style.isActive);
    }

    return (
        <NavLink className={buildLinkClass(rest)} to={to}>{children}</NavLink>
    );
}

export default CustomNavLink;