import React, { Fragment, useState } from "react"
import { Formik, Form} from "formik"
import * as Yup from "yup"
import { useForm } from "@formspree/react"
import InputField from "./InputField"
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner"
import MyToast from "./MyToast"

const ContactForm = () => {
  const initFormValues = { name: "", email: "", msg: "" }

  const schema = Yup.object({
    name: Yup.string().required("Proszę, wprowadź imię."),
    email: Yup.string()
      .email("Proszę, wprowadź poprawny email.")
      .required("Proszę, wprowadź email."),
    msg: Yup.string().required("Proszę, wprowadź wiadomość."),
  })

  const [, handleSubmit] = useForm("mknygddg")
  const [isLoading, setLoading] = useState(false)
  const [toastText, setToastText] = useState("")

  const submitHandler = async (values, actions) => {
    setLoading(true)

    try {
      const response = await handleSubmit(values)
      if (!response.body.ok) {
        throw new Error("error")
      }
      actions.resetForm()
      setLoading(false)
      setToastText("Wysłano wiadomość!")
    } catch (err) {
      setLoading(false)
      setToastText("Wysyłanie nie powiodło się!")
    }
  }

  return (
    <Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
     <MyToast toastText={toastText} onClose={() => setToastText("")}/>
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
