/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import "bootstrap/dist/css/bootstrap.min.css"
import "./src/assets/css/global.css"
import bootstrap from "bootstrap/dist/js/bootstrap"


  document.addEventListener("scroll", function (e) {
    if (!document.getElementById("navbar")) return
    const navbar = document.getElementById("navbar")
    const fab = document.getElementById("fab")
    if (window.scrollY == 0) {
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
  })


export const onInitialClientRender = () => {
  if (!document.getElementById("navbar")) return
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#nav-links",
  })
}
