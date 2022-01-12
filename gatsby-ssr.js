const React = require("react")

const HtmlAttributes = {
  lang: "pl"
}

// const HeadComponents = [
//     <script key="bootstrap" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"  defer></script>
// ]

// const BodyAttributes = {
//   "data-bs-spy":"scroll",
//   "data-bs-target":"#nav-links",
//   "data-offset":70
// }

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  // setHeadComponents(HeadComponents)
  // setBodyAttributes(BodyAttributes)
}

