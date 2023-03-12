import React from 'react';
import s from './Display.module.scss';

const Display = () => {
    return (
        <div className={s.Display}>
            <input type="text" value={0}/>
        </div>
    );
};

export default Display;
