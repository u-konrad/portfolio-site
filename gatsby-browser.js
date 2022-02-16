import "bootstrap/dist/css/bootstrap.min.css"
import "./src/assets/css/global.css"
import bootstrap from "bootstrap/dist/js/bootstrap"

let scrollSpy

export const onRouteUpdate = function () {
  document.addEventListener("scroll", function (e) {
    const navbar = document.querySelector(".navbar")
    const fab = document.getElementById("fab")
    // const sb = document.getElementById("social-buttons")

    if (navbar) {
      if (window.scrollY === 0) {
        navbar.classList.remove("scrolled")
      } else {
        if (!navbar.classList.contains("scrolled")) {
          navbar.classList.add("scrolled")
        }
      }
    }

    if (fab) {
      if (window.scrollY >= 700) {
        if (!fab.classList.contains("visible")) {
          fab.classList.add("visible")
        }
      } else {
        fab.classList.remove("visible")
      }
    }
  })

  if (!document.getElementById("nav-links")) {
    return
  }

  scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#nav-links",
  })
}

export const onPreRouteUpdate = () => {
  if (scrollSpy) {
    scrollSpy.dispose()
  }
}
