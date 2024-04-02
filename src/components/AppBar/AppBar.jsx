import style from './AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import Navigations from '../Navigations/Navigations';
import { selectIsLoggedIn } from '../../redux/auth/selector';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={style.header}>
      {isLoggedIn ? <UserMenu /> : <Navigations />}
    </header>
  );
}

export default AppBar;