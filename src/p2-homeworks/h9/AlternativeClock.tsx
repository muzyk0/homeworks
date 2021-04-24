import React, {useEffect, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

function AlternativeClock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(() => new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(() => new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const helper = (v1: number) => (v2: number) => (v3: number) => {
        const normalize = (num: number) => {
            return num < 10 ? `0${num}` : num
        }
        return `${normalize(v1)}:${normalize(v2)}:${normalize(v3)}:`
    }



    // number < 10 ? `0${number}` : number
    const stringTime = helper(date.getHours())(date.getMinutes())(date.getSeconds());
    const stringDate = helper(date.getDay())(date.getMonth())(date.getFullYear());

    return (
        <div>
            <div
                style={{display: 'inline-block'}}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {!!timerId && stringTime}
            </div>


            <div>
                {show && stringDate}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default AlternativeClock;
