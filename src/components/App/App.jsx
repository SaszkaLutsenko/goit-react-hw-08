import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading} from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import style from './App.module.css';
import { fetchContacts } from '../../redux/contactsOps';
import { selectIsRefreshing } from '../../redux/selector';
import { logOut, refreshUser } from '../../redux/operations';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';

const AppBar = lazy(() => import( '../AppBar/AppBar'));
const LoginForm = lazy(() => import( '../LoginForm/LoginForm'));
const RegistrationForm = lazy(() => import('../RegistrationForm/RegistrationForm'));
 
const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const isRefreshing = useSelector(selectIsRefreshing);
    
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        < Layout>
        { isRefreshing ? (
            <Loader />
        ) : (
            <Suspense fallback={<Loader />}>
                 <Routes>
                    <Route path='/' element={}/>
            </Routes>
            </Suspense>
           
        )}
        </Layout>
        // <div className={style.container}>
        //     <AppBar />
        //     {isLoggedIn ? (
        //         <>
        //             <p>Please log in</p>
        //             <LoginForm />
        //         </>
        //     ) : (
        //         <>
        //             <p>please reagistrate</p>
        //             <RegistrationForm />
        //         </>
        //     )} 
        //     <h1 className={style.title}>Phonebook</h1>
        //     <div className={style.form}>
        //         <ContactForm />
        //         <SearchBox />
        //     </div>
        //     {loading && <Loader />}
        //     {error && <b>{error}</b>}
        //     <ContactList />
        // </div>
    );
};

export default App;