import React, { useContext, useReducer } from 'react'
import { Circle } from './models/circle'
import { reducer } from './reducer'

interface Context {
    circlesList: Array<Circle>;
    createCircle?: (circle: Circle) => void;
    removeCircle?: () => void;
}

const defaultState = {
    circlesList: []
}

const AppContext = React.createContext<Context>(defaultState)

const AppProvider = ({ children } : { children: JSX.Element }) => {

    const [state, dispatch] = useReducer(reducer, defaultState);

    const createCircle = (circle: Circle) => {
        dispatch({ type: "CREATE_CIRCLE", payload: circle })
    }

    const removeCircle = () => {
        dispatch({ type: "REMOVE_CIRCLE" } as any)  // no payload
    }

    return <AppContext.Provider value={ { ...state, createCircle, removeCircle } } >
                { children }
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