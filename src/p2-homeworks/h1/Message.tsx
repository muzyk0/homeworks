import React from 'react'
import s from './Message.module.css';


type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt=""/>

            <div className={s.message__inner}>
                <div className={s.message__name}>{props.name}</div>
                <div className={s.message__text}>{props.message}</div>
                <div className={s.message__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message