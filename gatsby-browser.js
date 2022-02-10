import "bootstrap/dist/css/bootstrap.min.css"
import "./src/assets/css/global.css"
import bootstrap from "bootstrap/dist/js/bootstrap"

export const onRouteUpdate = () => {
  if (!document.getElementById("navbar")) return

  document.addEventListener("scroll", function (e) {
    const navbar = document.getElementById("navbar")
    const fab = document.getElementById("fab")
    // const sb = document.getElementById("social-buttons")

    if (window.scrollY === 0) {
      navbar.classList.remove("scrolled")
    } else {
      if (!navbar.classList.contains("scrolled")) {
        navbar.classList.add("scrolled")
      }
    }
    if (window.scrollY >= 700) {
      if (!fab.classList.contains("visible")) {
        fab.classList.add("visible")
      }
    } else {
      fab.classList.remove("visible")
    }

    // if (window.scrollY > 2955) {
    //   if (!sb.classList.contains("hidden")) {
    //     sb.classList.add("hidden")
    //   }
    // } else {
    //   if (sb.classList.contains("hidden")) {
    //     sb.classList.remove("hidden")
    //   }
    // }
  })

  new bootstrap.ScrollSpy(document.body, {
    target: "#nav-links",
  })
}
