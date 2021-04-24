import {Dispatch} from 'redux';

type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false
};

export const loadingReducer = (state: initStateType = initState, action: actions): initStateType => {
    switch (action.type) {
        case "isLoading": {
            return {...state, ...action.payload}
        }
        default: return state;
    }
};
type actions = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {type: 'isLoading', payload: {isLoading}}
};
export const loadingThunk = () => (dispatch: Dispatch) => {
    dispatch(loadingAC(true))
    console.log("loading...");

    const backGround = document.getElementById('root');
    // @ts-ignore
    backGround.style.animation = 'lds-hourglass 2s infinite'

    setTimeout(() => {
        dispatch(loadingAC(false))
        console.log("load");

        const backGround = document.getElementById('root');
        // @ts-ignore
        backGround.style.animation = 'none'

    }, 2000)
}