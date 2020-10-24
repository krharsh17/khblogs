import {light} from "@material-ui/core/styles/createPalette";

const lightTheme = {
    primary: '#3F6396',
    secondary: '#009CA3',
    dark: '#1B1926',
    light: '#EFF2FB',
    light50: 'rgba(239,242,251,0.5)',
    dark50: 'rgba(27,25,38,0.5)',
    code_background: '#2d2b55',
    code_text: '#e5f5fc',
    disabled: '#CACACA'
}

const alternateTheme = {
    primary: '#654D67',
    secondary: '#9D5875',
    dark: '#1B1926',
    dark50: 'rgba(27,25,38,0.5)',
    light: '#FFF1F7',
    code_background: '',
    code_text: '',
    disabled: ''
}

const darkTheme = {
    primary: '#F6EDE2',
    secondary: '#F2D275',
    dark: '#E5E5E5',
    light: '#1B1926',
    light50: 'rgba(27,25,38,0.5)',
    dark50: 'rgba(229,229,229,0.5)',
    code_background: '#263238',
    code_text: '#dfe4dc',
    disabled: '#888'
}

const getTheme = (theme) => {
    return (theme === "light" ? lightTheme : darkTheme)
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '500px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}


const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
}

export {lightTheme, alternateTheme, darkTheme, device, getTheme};