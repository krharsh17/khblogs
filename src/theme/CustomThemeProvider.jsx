import React, { useEffect, useState } from "react"
import {ThemeProvider} from "styled-components";
import {getTheme} from "../components/Global";

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext(
    {
        currentTheme: "light",
        setTheme: null
    }
)

const CustomThemeProvider = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props

    // State to hold the selected theme name
    const [themeName, _setThemeName] = useState("light")

    useEffect(() => {
        // Read current theme from localStorage or maybe from an api
        _setThemeName(localStorage.getItem("appTheme") || "light")
    })

    // Retrieve the theme object by theme name
    const theme = getTheme(themeName)

    // Wrap _setThemeName to store new theme names in localStorage
    const setThemeName = (name) => {
        localStorage.setItem("appTheme", name)
        _setThemeName(name)
    }

    const contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName
    }

    return (
        <CustomThemeContext.Provider value={contextValue}>
            {(themeName ? <ThemeProvider theme={theme}>{children}</ThemeProvider> : <div/>)}
        </CustomThemeContext.Provider>
    )
}

export default CustomThemeProvider
