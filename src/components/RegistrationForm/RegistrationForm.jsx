import style from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId, useState  } from "react";


const LogSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const pasId = useId();
  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LogSchema}
      >
        <Form>
          <label htmlFor={nameId} className={style.label}>
            Name
          </label>
          <Field type="text" name="name" id={nameId} className={style.field} />
          <ErrorMessage name="name" component="span" className={style.error} />
          <label htmlFor={emailId} className={style.label}>
            Email
          </label>
          <Field type="email" name="email" id={emailId} className={style.field} />
          <ErrorMessage name="email" component="span" className={style.error} />
          <label htmlFor={pasId} className={style.label}>
            Password
          </label>
          <div className={style.passwordContainer}>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              id={pasId}
              className={style.field}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className={`${style.toggleButton} ${
                showPassword ? style.show : style.hide
              }`}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <ErrorMessage
            name="password"
            component="span"
            className={style.error}
          />
          <button className={style.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;