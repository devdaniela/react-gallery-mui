import { createTheme, withTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const PinkTheme = createTheme({
    palette:{
        primary: {
            light: '#FFFFFF', // #DA8BB3
            main: '#C23F81',
            darker: '#9B3267',
            contrastText: '#fff'
        },
        secondary: {
            light: '#E5E5E5',
            main: '#74667E',
            darker: '#313131',
            contrastText: '#fff'
        },
        error: {
            main: red.A400
        },
        warning: { 
            main: "#FFB100" 
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'serif',
          ].join(','),
        h1: {
            fontWeight: 'bold'
        },
        h2: {
            fontWeight: 'bold'
        },
        h3: {
            fontWeight: 'bold'
        },
        copyright: {
            fontFamily: 'Nunito-Sans'
        }
    },
})

