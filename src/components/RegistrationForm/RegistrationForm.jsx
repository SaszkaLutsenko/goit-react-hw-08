import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
        <div className={style.field}>
          <label htmlFor="name" className={style.label}>
            Username
            <Field type="text" name="name" placeholder="name" />
            <ErrorMessage name="name" component="div" className={style.error} />
          </label>
        </div>
        <div className={style.field}>
          <label htmlFor="email" className={style.label}>
            Email
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" className={style.error} />
          </label>
        </div>
        <div className={style.field}>
          <label htmlFor="password" className={style.label}>
            Password
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" className={style.error} />
          </label>
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;