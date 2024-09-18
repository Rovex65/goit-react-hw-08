import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./RegistrationPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import toast from "react-hot-toast";

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters long")
    .max(100, "Username must be less than 100 characters"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be less than 100 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const RegistartionPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("User has been registered");
      })
      .catch(() => {
        toast.error(error);
      });
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Alex" />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Email</span>
            <Field type="text" name="email" placeholder="alex@gmail.com" />
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
            Register
          </button>
          {error && (
            <p className={css.errorText}>Oops, some error occured... {error}</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegistartionPage;
