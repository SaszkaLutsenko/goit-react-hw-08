import { Formik, Form, Field } from 'formik';
import style from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations'

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" placeholder="name" />
        </label>
        <label className={style.label}>
          Email
          <Field type="email" name="email" placeholder="email" />
        </label>
        <label className={style.label}>
          Password
          <Field type="password" name="password" placeholder="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}