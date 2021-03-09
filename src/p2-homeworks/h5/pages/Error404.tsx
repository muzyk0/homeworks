import React from 'react';
import s from './Eror404.module.css'

function Error404() {
    return (
        <div className={s.pageError}>
            <div className={s.error}>
                <div>404</div>
                <div>Page not found!</div>
                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    );
}

export default Error404;
