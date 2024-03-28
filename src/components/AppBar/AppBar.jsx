import style from './AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import Navigations from '../Navigations/Navigations';
import { selectIsLoggedIn } from '../../redux/selector';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      {isLoggedIn ? <UserMenu /> : <Navigations />}
    </header>
  );
}