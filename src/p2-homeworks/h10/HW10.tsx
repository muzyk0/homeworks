import React, {useEffect} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC, loadingThunk} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector((state: AppStoreType) => state.loading)
    const dispatch = useDispatch()

    const setLoading = () => {

        dispatch(loadingThunk())

    };


    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
