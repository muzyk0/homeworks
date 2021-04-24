import {initialStateType} from '../HW8';

export const homeWorkReducer = (state: initialStateType = [], action: ActionType): initialStateType => {
    switch (action.type) {
        case 'sort': {
            const updatedState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return (action.payload === 'up') ? updatedState : updatedState.reverse()
        }
        case 'check': {

            return [...state].filter((name) => name.age >= action.payload)
        }
        default:
            return state
    }
};

type ActionType = { type: 'sort', payload: 'up' | 'down' }
    | { type: 'check', payload: 18 }