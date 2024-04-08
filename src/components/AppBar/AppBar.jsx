import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import Navigations from '../Navigations/Navigations';
import UserMenu from '../UserMenu/UserMenu';
import style from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 

  return (
    <header className={style.header}>
      <Navigations />
     <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
};

export default AppBar;