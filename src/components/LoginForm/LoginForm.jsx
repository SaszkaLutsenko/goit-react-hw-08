import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import style from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
        <div className={style.field}>
          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <Field type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className={style.error} />
        </div>
        <div className={style.field}>
          <label htmlFor="password" className={style.label}>
            Password
          </label>
          <Field type="password" name="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className={style.error} />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;