/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import CustomThemeProvider from "./src/theme/CustomThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Layout from "./src/components/layout";

// You can delete this file if you're not using it
export const wrapRootElement = ({element}) => {
    return <CustomThemeProvider>
        <CssBaseline/>
        <Layout>
            {element}
        </Layout>
    </CustomThemeProvider>
}