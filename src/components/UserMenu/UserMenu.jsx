import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selector';
import style from './UserMenu.module.css';
import { logOut } from '../../redux/operations';


export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.wrapper}>
      <p className={style.name}>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
}