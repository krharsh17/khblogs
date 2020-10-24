import { createMuiTheme } from "@material-ui/core/styles"


// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#EB4724",
        },
        secondary: {
            main: "#FFFFFF",
            dark: "#000000"
        },
        text: {
            primary: "#FFFFFF",
            secondary: "rgba(255, 255, 255, 0.50)"
        },
        background: {
            default: "#000000",
            paper: "#1a1a1a",
        },
        custom: {
            alternate: "#1a1a1a",
            alternate50: "rgba(26,26,26,0.5)",
            alternate25: "rgba(26,26,26, 0.25)",
            alternate90: "rgba(26, 26, 26, 0.9)",
            border: "#3c3c3c",
            primary50: "rgba(255,255,255,0.5)",
        },
        typography: {
            h6: {
                color: "#FFFFFF"
            },
            h5: {
                color: "#FFFFFF"
            },
            h4: {
                color: "#FFFFFF",
            },
            h3: {
                color: "#FFFFFF"
            },
            h2: {
                color: "#FFFFFF"
            },
            h1: {
                color: "#FFFFFF"
            },
            subtitle2: {
                color: "rgba(255, 255, 255, 0.75)"
            },
            subtitle1: {
                color: "rgba(255, 255, 255, 0.75)"
            },
            body1: {
                color: "#FFFFFF"
            },
            body2: {
                color: "#FFFFFF"
            },
            caption: {
                color: "rgba(255, 255, 255, 0.75)"
            }
        },
    }
})

export default theme