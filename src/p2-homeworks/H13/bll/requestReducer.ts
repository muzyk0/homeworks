import {requestsAPI, RequestsType} from '../dal/RequestsAPI';
import {Dispatch} from 'redux';
import {AxiosError} from 'axios';

export enum Actions {
    REQUEST_TEST = 'APP/H13/REQUEST_TEST',
}

const initState: RequestsType = {
    errorText: null,
    info: null,
    yourBody: {
        success: null,
    },
    yourQuery: {}
}

export const requestReducer = (state: RequestsType = initState, action: ActionType): RequestsType => {
    switch (action.type) {
        case Actions.REQUEST_TEST: {
            return {...state, ...action.state}
        }
        default: return state;
    }
};

export const setRequestData = (state: RequestsType) => ({
    type: Actions.REQUEST_TEST, state
} as const);

// Types
export type ActionType =
    | ReturnType<typeof setRequestData>

// Thunk
export const setRequest = (value: boolean) => (dispatch: Dispatch) => {

    requestsAPI.postRequest(value)
        .then(response => {
            dispatch(setRequestData(response.data))
        })
        .catch((e: AxiosError) => {
            dispatch(setRequestData(e.response?.data))
        })
}