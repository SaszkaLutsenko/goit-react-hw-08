import style from '../components/stylePages/Home.module.css';

const Home = () => {
    return (
        <div className={style.container}>
       <p className={style.welcome}>Welcome to Home page</p>
       <p className={style.text}>
Protect and manage your contacts securely. Log in to handle your contacts with care. Safely store, edit, or remove important contacts as required.
 </p>
    </div>
    )
}

export default Home;