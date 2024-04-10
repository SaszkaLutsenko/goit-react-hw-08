import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import style from './LoginForm.module.css';
import {useId, useState } from 'react';


const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const emailId = useId();
  const pasId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
   <div className={style.container}>
     <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
          <label htmlFor={emailId} className={style.label}>
            Email
          </label>
          <Field type="email" name="email" className={style.field} />
          <ErrorMessage name="email" component="div" className={style.error} />
          <label htmlFor={pasId} className={style.label}>
            Password
          </label>
          <div className={style.passwordContainer}>
          <Field type={showPassword ? "text" : "password"}
           name="password" 
           className={style.field}
            />
             <button
              type="button"
              onClick={toggleShowPassword}
              className={`${style.toggleButton} ${
                showPassword ? style.show : style.hide
              }`}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            </div>
          <ErrorMessage name="password" component="div" className={style.error} />
          
      
        <button className={style.button} type="submit">Log In</button>
        
      </Form>
    </Formik>
   </div>
  );
}

export default LoginForm;