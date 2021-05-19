import React, {useState} from 'react';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {requestsAPI, RequestsType} from '../dal/RequestsAPI';
import {AxiosError} from 'axios';

const Request = () => {

    const [value, setValue] = useState(false)

    const [text, setText] = useState<null | RequestsType>(null)
    const [error, setError] = useState<null | string>(null)

    const sendRequest = async () => {

        await requestsAPI.postRequest(value)
            .then(response => {
                setText(response.data)
            })
            .catch((e: AxiosError) => {
                setText(e.response?.data)
            })
    }

    return (
        <div>
            <SuperButton onClick={sendRequest}>Send request</SuperButton>
            <SuperCheckbox onChangeChecked={setValue}/>
            <div>
                {!error && <div>
                    <p>{text && text.errorText}</p>
                    <p>{text && text.info}</p>
                </div>}
            </div>

        </div>
    );
};

export default Request;