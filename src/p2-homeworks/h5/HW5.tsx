import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './Header';
import Routes from './Routes';

function HW5() {
    return (
        // eslint-disable-next-line react/style-prop-object
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
