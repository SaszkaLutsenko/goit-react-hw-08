import style from './Navigations.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

const Navigations = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={style.nav}>
      <CustomNavLink  to='/'>Home</CustomNavLink>
      {isLoggedIn && <CustomNavLink to='/contacts'>Contact</CustomNavLink>}
    </div>
  );
};

export default Navigations;