import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.ico"

function SEO({ description, path, title, image, keywords }) {
  return (
    <Helmet>
      <title>{title + " | KHBlogs"}</title>
      <link
        rel="canonical"
        href={"https://blog.krharsh17.vision" + (path ? path : "")}
      />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}
      <link rel="icon" href={favicon} />
      <meta name="keywords" content={keywords} />
      <meta
        property="og:url"
        content={"https://blog.krharsh17.vision" + (path ? path : "")}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:type" content="image/jpeg" />}
      {image && <meta property="og:image:width" content="300" />}
      {image && <meta property="og:image:height" content="300" />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={"@krharsh17"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="msapplication-TileImage" content={image} />
      <link rel={"image_src"} href={image} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
