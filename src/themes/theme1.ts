import { createTheme } from '@mui/material/styles';

export const theme1 = createTheme({
    palette: {
        create: {
            main: '#00e676',
            contrastText: 'white'
        },
        remove: {
            main: '#ff3d00',
            contrastText: 'white'
        },
    },
})