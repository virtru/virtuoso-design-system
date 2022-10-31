import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import baseTheme from '../theme'

const theme = createTheme(baseTheme);


const DesignSystem = (props) => {

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}


export default DesignSystem;