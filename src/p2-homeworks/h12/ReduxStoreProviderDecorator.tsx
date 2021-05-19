import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {AppStoreType} from '../h10/bll/store';
import {loadingReducer} from '../h10/bll/loadingReducer';
import {themeReducer} from './bll/themeReducer';
import {requestReducer} from '../H13/bll/requestReducer';

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: requestReducer,
})

const initialGlobalState: AppStoreType = {
    theme: {
        color: 'red'
    },
    request: {
        errorText: 'null',
        info: 'null',
        yourBody: {
            success: true,
        },
        yourQuery: {}
    },
    loading: {
        isLoading: false
    }
}

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppStoreType);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}