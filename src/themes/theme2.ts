import { createTheme } from '@mui/material/styles';

export const theme2 = createTheme({
    palette: {
        create: {
            main: '#489dff',
            contrastText: 'white'
        },
        remove: {
            main: '#ff8f26',
            contrastText: 'white'
        },
    },
})