export enum Actions {
    CHANGE_THEME = 'APP/CHANGE-THEME',
}

const initState = {
    color: 'red' as string
};

export const themeReducer = (state = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case Actions.CHANGE_THEME: {
            return {...state, ...action.payload}
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => ({type: Actions.CHANGE_THEME, payload: {color: theme}} as const);

// Types
type InitialStateType = typeof initState

export type ActionType =
    | ReturnType<typeof changeThemeC>