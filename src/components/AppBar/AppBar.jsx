import style from './AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import Navigations from '../Navigations/Navigations'

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing)
  return (
    <header className={style.header}>
      <Navigations />
      {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
    </header>
  );
}

export default AppBar;