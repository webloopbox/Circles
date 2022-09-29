import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        create: Palette['primary'];
        remove: Palette['primary'];
    }
    interface PaletteOptions {
        create: PaletteOptions['primary'];
        remove: PaletteOptions['primary'];
    }
}

declare module "@mui/material" {
    interface ButtonPropsColorOverrides {
        create: true;
        remove: true;
    }
}
