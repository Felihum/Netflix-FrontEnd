import { createTheme } from "@mui/material";
import { cyan, red, grey } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: red[900],
            dark: red[800],
            light: red[500],
            contrastText: 'white',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background: {
            default: grey[900],
            paper: grey[800],
        }
    }
});