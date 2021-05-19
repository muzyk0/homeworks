import React, {useState} from 'react';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestsType} from '../dal/RequestsAPI';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../h10/bll/store';
import {setRequest} from '../bll/requestReducer';

const Request = () => {

    const [value, setValue] = useState<boolean>(false)

    const state = useSelector<AppStoreType, RequestsType>(state => state.request)
    const dispatch = useDispatch()

    const sendRequest = () => {
        dispatch(setRequest(value))
    }

    return (
        <div>
            <SuperButton onClick={sendRequest}>Send request</SuperButton>
            <SuperCheckbox onChangeChecked={setValue}/>
            <div>
                {!!state && <div>
                    <p>{state && state.errorText}</p>
                    <p>{state && state.info}</p>
                </div>}
            </div>

        </div>
    );
};

export default Request;