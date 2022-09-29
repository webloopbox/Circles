import React, { useContext, useReducer } from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext()

const defaultState = {
    circlesList: []
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, defaultState);

    const createCircle = (circle) => {
        dispatch({ type: "CREATE_CIRCLE", payload: circle })
    }

    const removeCircle = () => {
        dispatch({ type: "REMOVE_CIRCLE" })
    }

    return <AppContext.Provider value={{ ...state, createCircle, removeCircle }} >
        {children}
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