import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Board } from './Board';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProvider } from './context';

const theme = createTheme({
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppProvider>
      <Board />
    </AppProvider>
  </ThemeProvider>,
  document.getElementById('root')
)