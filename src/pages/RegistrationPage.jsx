import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import { apiRegister } from "../redux/auth/operations";

import css from '../components/ContactForm/ContactForm.module.css'
import { selectAuthError } from "../redux/auth/selectors";

function RegistrationPage() {
  const dispatch = useDispatch()
  const error = useSelector(selectAuthError)

  const handleSubmit = (user, actions) => {
    dispatch(apiRegister(user))
    actions.resetForm()
  }

  const registerValidation = Yup.object().shape({
    name: Yup.string().required("required").min(2, "too short").max(100, "too long"),
    email: Yup.string().email("email is not valid").required("required"),
    password: Yup.string().required("password is required").min(8, "too short").max(100, "too long")
  });


  const initialValues = {
    name: "", 
    email: "",
    password: ""
  }
  

  return (
    <Formik 
      validationSchema={registerValidation} 
      initialValues={initialValues} 
      onSubmit={handleSubmit}>
        <Form className={ css.formBlock} >
          <label>
            <span>Name</span> <br/>
            <Field type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label> 

          <label>
              <span>Email</span> <br/>
              <Field type="text" name="email" />
              <ErrorMessage className={css.error} name="email" component="span" />
          </label>

          <label>
              <span>Password</span> <br/>
              <Field type="password" name="password" />
              <ErrorMessage className={css.error} name="password" component="span" />
          </label>

          <button type="submit" className={ css.button }>Register</button>
          {error && <p className={css.error}>Error: {error}</p>}

        </Form>

    </Formik>        
  )
}

export default RegistrationPage