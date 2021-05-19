import {Slider} from '@material-ui/core'
import React from 'react'
import s from '../c7-SuperRange/SuperRange.module.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: any, newValue: number | number[]) => {

        onChangeRange && onChangeRange(newValue as [number, number]);
    };

    const finalRangeClassName = `${s.range}}`

    return (
        <span className={s.range}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </span>
    )
}

export default SuperDoubleRange
