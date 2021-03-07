import React from 'react';
import {AffairType} from './HW2';
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (value: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={style.affair}>
            {/*{props.affair.name}*/}
            {/*{props.affair.priority}*/}
            <div className={style.item}>{props.affair.name}</div>
            <div className={style.item}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    );
}

export default Affair;
