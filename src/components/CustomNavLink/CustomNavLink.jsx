import style from './CustomNavLink.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.isActive);
}
const CustomNavLink = ({ children, to}) => {
    

    return (
        <NavLink className={buildLinkClass} to={to}>{children}</NavLink>
    );
}

export default CustomNavLink;