import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading} from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import style from './App.module.css';
import { fetchContacts } from '../../redux/contactsOps';
import { selectIsLoggedIn } from '../../redux/selector';

const AppBar = lazy(() => import( '../AppBar/AppBar'));
const LoginForm = lazy(() => import( '../LoginForm/LoginForm'));
const RegistrationForm = lazy(() => import('../RegistrationForm/RegistrationForm'));
 
const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    // const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const { isLoggedIn } = useAuth

    return (
        <div className={style.container}>
            <AppBar />
            {isLoggedIn ? (
                <>
                    <p>Please log in</p>
                    <LoginForm />
                </>
            ) : (
                <>
                    <p>please reagistrate</p>
                    <RegistrationForm />
                </>
            )} 
            <h1 className={style.title}>Phonebook</h1>
            <div className={style.form}>
                <ContactForm />
                <SearchBox />
            </div>
            {loading && <Loader />}
            {error && <b>{error}</b>}
            <ContactList />
        </div>
    );
};

export default App;