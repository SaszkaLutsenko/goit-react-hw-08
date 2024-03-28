import style from './Navigations.module.css';

export default function Navigations() {
  return (
    <div>
      <a className={style.link}>Register</a>
      <a className={style.link}>Log In</a>
    </div>
  );
}