export const reducer = (state, action) => {

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
    throw new Error('no matching action type');
};