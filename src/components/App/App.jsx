import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading} from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import style from './App.module.css';
import { fetchContacts } from '../../redux/contactsOps';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <div className={style.container}>
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