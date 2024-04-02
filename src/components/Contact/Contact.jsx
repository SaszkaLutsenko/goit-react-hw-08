import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { editContact, deleteContact } from '../../redux/contacts/operations';
import * as Yup from 'yup';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Field, Form, Formik } from 'formik';
import { TextField } from '@mui/material'; 

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const [isEdited, setIsEdited] = useState(false);

  const handleSubmit = values => {
    dispatch(editContact({contactId: id, contactInfo: values}))
      .unwrap()
      .then(() => {
        toast.success('Contact updated successfully');
        setIsEdited(false);
      })
      .catch(() => {
        toast.error('Something went wrong while updating contact', { id: 'editError' });
      });
  };

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted successfully');
      })
      .catch(() => {
        toast.error('Something went wrong while deleting contact', { id: 'deleteError' });
      });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setIsEdited(true);
    setAnchorEl(null);
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
        <div>
          {isEdited ? (
            <Formik
              onSubmit={handleSubmit}
              initialValues={{name, number}}
              validationSchema={validationSchema}
            >
              <Form>
                <div className={style.box}>
                  <div className={style.fields}>
                    <TextField 
                      name='name'
                      size='small'
                      id='standard-basic'
                    />
                    <TextField 
                      name='number'
                      type='tel'
                      size='small'
                      id='standard-basic'
                    />
                  </div>
                  <div className={style.formButton}>
                    <button className={style.btn} type='submit'>Done</button>
                    <button 
                      className={style.btn}
                      onClick={() => setIsEdited(false)}
                      type='button'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          ) : (
            <div className={style.data}>
              <p>{name}</p>
              <p>{number}</p>
            </div> 
          )}
        </div>
      </div>
      <button onClick={handleDelete} className={style.delete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;