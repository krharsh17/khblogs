import {useContext} from "react";
import {CustomThemeContext} from "../theme/CustomThemeProvider";
import {getTheme} from "./Global";

export const useTheme = () => {
	const {currentTheme} = useContext(CustomThemeContext)

	return getTheme(currentTheme)
}