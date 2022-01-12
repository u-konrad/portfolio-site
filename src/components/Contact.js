import React from "react"
import { Card, Container } from "react-bootstrap"
import ContactForm from "./ContactForm"
import ContactPicture from "../assets/svg/undraw_letter_re_8m03.svg"

const Contact = () => {
  return (
    <section id="kontakt" className="p-100px-tb">
      <Container className="my-container">
        <h2 className="section-title ">KONTAKT</h2>
        <p className="my-2 section-subtitle">Zróbmy coś razem</p>
        <div className="py-5 position-relative">
          <Card className="col-lg-8  p-4 bg-white shadow rounded  ">
            <ContactForm />
          </Card>
          <ContactPicture className='contact-pic position-absolute' />
        </div>
      </Container>
    </section>
  )
}

export default Contact
