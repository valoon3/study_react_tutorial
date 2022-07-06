

export const initialState = {
    boardState : 'index',
}

export const changeBoardStateAction = (state) => {
    return {
        type: 'CHANGE_BOARD_STATE',
        boardState: state,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BOARD_STATE':

            return {
                ...state,
                boardState: action.boardState,
            };
        default:
            return state;
    }
}

export default reducer;