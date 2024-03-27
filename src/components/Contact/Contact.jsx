import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
      dispatch(deleteContact(id));
  };

  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.name}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={style.number}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete} className={style.delete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;