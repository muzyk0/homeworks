import React, {useState} from 'react';
import Affair from "./Affair";
import style from './Affairs.module.css'
import {AffairType, FilterType} from './HW2';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (

        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all'); // fix
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    /*const cnAll = props.filter === 'all' ? style.active : ''
    const cnHigh = props.filter === 'high' ? style.active : ''
    const cnMiddle = props.filter === 'middle' ? style.active : ''
    const cnLow = props.filter === 'low' ? style.active : ''*/

    const setClass = (className: FilterType) => props.filter === className ? style.active : ''

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll} className={setClass('all')}>All</button>
            <button onClick={setHigh} className={setClass('high')}>High</button>
            <button onClick={setMiddle} className={setClass('middle')}>Middle</button>
            <button onClick={setLow} className={setClass('low')}>Low</button>
        </div>
    );
}

export default Affairs;
