import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import style from '../components/stylePages/Contacts.module.css';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading, selectError } from '../redux/contacts/selectors';

import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import Loader from '../components/Loader/Loader';
import ContactList from '../components/ContactList/ContactList';

const Contacts = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
          .unwrap()
          .catch(() => toast.error('Try refreshing the page', { id: 'error' }));
    }, [dispatch]);

    return (
       <div className={style.wrap}>
          <div className={style.haad}>Contacts Page</div>
          <div className={style.container}>
            <ContactForm />
            <SearchBox />
          </div>
          {loading && !error && <Loader />}
          {error && <b>{error}</b>}
          <ContactList />
       </div>
    );
}

export default Contacts;