import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import toast from "react-hot-toast";

const LoginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be less than 100 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("User has been logged in");
      })
      .catch(() => {
        toast.error(error);
      });
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Email</span>
            <Field
              type="text"
              name="email"
              placeholder="kirilo.example@gmail.com"
            />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Password</span>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Log In
          </button>

          {error && (
            <p className={css.errorText}>Oops, some error occured... {error}</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
