import style from './Home.module.css';

const HomePage = () => {
    return (
        <div className={style.container}>
       <p className={style.welcome}>Welcome to Home page</p>
       <p className={style.text}>Keep your contacts private and secure. Log in to manage your contacts and keep them safe. Save your important contacts by adding, editing, or deleting them as needed. </p>
    </div>
    )
}

export default HomePage;

