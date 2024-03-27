import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useId } from 'react';
import style from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const schema = yup.object().shape({
  name: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const ContactForm = () => {
  const elementId = useId();
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(addContact(values));
      actions.resetForm();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={style.form}>
          <div className={style.field}>
            <label htmlFor={elementId + '-name'}>Name</label>
            <Field name="name" type="text" id={elementId + '-name'} placeholder="Name" />
            <ErrorMessage name="name" component="div" className={style.error} />
          </div>

          <div className={style.field}>
            <label htmlFor={elementId + '-number'}>Number</label>
            <Field name="number" type="tel" id={elementId + '-number'} placeholder="999-99-99" />
            <ErrorMessage name="number" component="div" className={style.error} />
          </div>

          <button type="submit" className={style.button}>Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;