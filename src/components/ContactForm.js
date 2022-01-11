import React from 'react'
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { useForm } from '@formspree/react';


const ContactForm = () => {

    const initFormValues = { name: "", email: "", msg: "" }

    const schema = Yup.object({
      name: Yup.string().required("Proszę, wprowadź imię."),
      email: Yup.string()
        .email("Proszę, wprowadź poprawny email.")
        .required("Proszę, wprowadź email."),
      msg: Yup.string().required("Proszę, wprowadź wiadomość."),
    })

    const [state, handleSubmit] = useForm("mknygddg");
  
    const submitHandler = event => {
      event.preventDefault()
    }

    return (
        <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={initFormValues}
      >
        <Form>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Imię
            </label>
            <Field
              className="form-control"
              id="name"
              name="name"
              type="text"
              placeholder="Twoje imię..."
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="text"
              className="form-control"
              placeholder="Twój email..."
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="msg">
              Treść
            </label>
            <Field
              id="msg"
              name="msg"
              type="text"
              className="form-control"
              rows={8}
              as="textarea"
              placeholder="Twoja wiadomość..."
            />
          </div>
          <button type="submit" className="m-btn m-btn-theme">
            Wyślij
          </button>
        </Form>
      </Formik>
    )
}

export default ContactForm
