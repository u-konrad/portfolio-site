import React from "react"
import { Toast } from "react-bootstrap"

const MyToast = ({ toastText, onClose }) => {
  let type
  if (toastText === "Wysłano wiadomość!") {
    type = "success"
  } else if (toastText === "Wysyłanie nie powiodło się!") {
    type = "danger"
  }

  return (
    <Toast
      className="toast"
      onClose={onClose}
      show={!!toastText}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <div className={`square rounded bg-${type}`}></div>
        <strong className="ms-2 me-auto">
          {type === "success" ? "Sukces!" : type === "danger" ? "Błąd!" : ""}
        </strong>
      </Toast.Header>
      <Toast.Body>{toastText}</Toast.Body>
    </Toast>
  )
}

export default MyToast
