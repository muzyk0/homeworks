import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';

const themes = ['dark', 'red', 'some', 'aqua'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, string>(state => state.theme.color)
    const dispatch = useDispatch()

    const onChangeOption = (option: string) => {
        debugger
        dispatch(changeThemeC(option))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                className={s[theme]}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
