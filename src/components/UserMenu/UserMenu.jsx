import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selector';
import style from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.wrapper}>
      <p className={style.name}>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;