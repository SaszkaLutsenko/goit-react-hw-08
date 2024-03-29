import style from './Navigations.module.css';

const Navigations = () => {
  return (
    <div>
      <a className={style.link}>Register</a>
      <a className={style.link}>Log In</a>
    </div>
  );
}

export default Navigations;