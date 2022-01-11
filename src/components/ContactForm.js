import React, { Fragment, useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { useForm } from "@formspree/react"
import InputField from "./InputField"
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner"

const ContactForm = () => {
  const initFormValues = { name: "", email: "", msg: "" }

  const schema = Yup.object({
    name: Yup.string().required("Proszę, wprowadź imię."),
    email: Yup.string()
      .email("Proszę, wprowadź poprawny email.")
      .required("Proszę, wprowadź email."),
    msg: Yup.string().required("Proszę, wprowadź wiadomość."),
  })

  const [state, handleSubmit] = useForm("mknygddg")
  const [isLoading, setLoading] = useState(false)

  const submitHandler = async (values, actions) => {
      setLoading(true)
      await new Promise(r => setTimeout(r, 2000));
    try {
      const response = await handleSubmit(values)
      if (!response.body.ok) {
        throw new Error("error")
      }
      actions.resetForm()
      setLoading(false)
      alert("Wysłano x wiadomość!")
    } catch (err) {
        setLoading(false)
      alert("Wysyłanie nie powiodło się!")
    }
  }

  return (
    <Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <Formik
        validationSchema={schema}
        onSubmit={submitHandler}
        initialValues={initFormValues}
      >
        {props => (
          <Form>
            <InputField
              id="name"
              name="name"
              label="Imię"
              type="text"
              placeholder="Twoje imię..."
              {...props}
            />
            <InputField
              id="email"
              name="email"
              type="text"
              placeholder="Twój email..."
              {...props}
            />
            <InputField
              id="msg"
              name="msg"
              type="text"
              rows={8}
              as="textarea"
              label="Wiadomość"
              placeholder="Twoja wiadomość..."
              {...props}
            />
            <button type="submit" className="m-btn m-btn-theme">
              Wyślij
            </button>
          </Form>
        )}
      </Formik>
    </Fragment>
  )
}

export default ContactForm
