export const ADD_POSITION = 'ADD_POSITION';


export const addPositionsAC = (positions) => {
    return {
        type: ADD_POSITION,
        positions
    }
}