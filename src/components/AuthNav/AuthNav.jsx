import style from './AuthNav.module.css';


import CustomNavLink from '../CustomNavLink/CustomNavLink';


const AuthNav = () => {
    return(
      <div className={style.nav}>
           <CustomNavLink to="/register">Register</CustomNavLink>
           <CustomNavLink to="/login">Log in</CustomNavLink>
      </div>
    );
};

export default AuthNav;