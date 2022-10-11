import { ThemeProvider } from '@emotion/react';
import React, { useContext, useReducer } from 'react'
import { Circle } from './models/circle'
import { reducer } from './reducer'
import getTheme from './themes/base'

interface Context {
    circlesList: Array<Circle>;
    themeName: string;
    createCircle: (circle: Circle) => void;
    removeCircle: () => void;
    changeTheme: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const defaultState = {
    circlesList: [],
    themeName: localStorage.getItem('appTheme') || 'theme1',
    createCircle: () => undefined,
    removeCircle: () => undefined,
    changeTheme: () => undefined
}

const AppContext = React.createContext<Context>(defaultState)

const AppProvider = ({ children } : { children: JSX.Element }) => {

    const [state, dispatch] = useReducer(reducer, defaultState);

    const theme = getTheme(state.themeName)

    const changeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        const themeName = event.target.checked ? "theme2" : "theme1"
        localStorage.setItem('appTheme', themeName)
        dispatch({type: "CHANGE_THEME", payload: themeName})
    }

    const createCircle = (circle: Circle) => {
        dispatch({ type: "CREATE_CIRCLE", payload: circle })
    }

    const removeCircle = () => {
        dispatch({ type: "REMOVE_CIRCLE" } as any)  // no payload
    }
    
    return <AppContext.Provider value={ { ...state, createCircle, removeCircle, changeTheme } } >
                <ThemeProvider theme={theme}>{ children }</ThemeProvider>
           </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {
    AppContext,
    AppProvider,
    useGlobalContext
}