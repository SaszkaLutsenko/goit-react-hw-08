import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import Navigations from '../Navigations/Navigations';
import UserMenu from '../UserMenu/UserMenu';
import style from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={style.header}>
      <Navigations />
      {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
    </header>
  );
};

export default AppBar;