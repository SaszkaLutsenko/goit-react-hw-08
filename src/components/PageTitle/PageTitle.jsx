import style from './PageTitle.module.css';

const PageTitle = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>;
}

export default PageTitle;