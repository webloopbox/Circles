import { RootState } from "./models/rootState";

type CircleAction = {
    type: string,
    payload: any
}

export const reducer = (state: RootState, action: CircleAction) => {

    if (action.type === "CREATE_CIRCLE") {
        const newCirclesList = state.circlesList
        newCirclesList.push(action.payload)
        return { ...state, circlesList: newCirclesList }
    }
    if (action.type === "REMOVE_CIRCLE") {
        const newCirclesList = state.circlesList
        newCirclesList.pop()
        return { ...state, circlesList: newCirclesList }
    }
    if (action.type === "CHANGE_THEME") {
        return { ...state, themeName: action.payload }
    }
    throw new Error('no matching action type');
};