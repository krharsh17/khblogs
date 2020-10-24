/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import CustomThemeProvider from "./src/theme/CustomThemeProvider"
import CssBaseline from "@material-ui/core/CssBaseline"
import React from "react"
import Layout from "./src/components/layout"

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()
  headComponents.sort((a, b) => {
    if (a.type === "meta") {
      return -1
    } else if (b.type === "meta") {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}

export const wrapRootElement = ({ element }) => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Layout>{element}</Layout>
    </CustomThemeProvider>
  )
}

// You can delete this file if you're not using it
