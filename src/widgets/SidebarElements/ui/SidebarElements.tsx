import React from 'react';
import s from './SidebarElements.module.scss';

import {Symbols} from 'entities/Symbols';
import {Numbers} from 'entities/Numbers';
import {Result} from 'entities/Result';
import {Display} from 'entities/Display';

const SidebarElements = () => {

    return (
        <div className={s.SidebarElements}>
            <div className={s.container}>
                <Display />
                <div className={s.draggableBlock}/>
            </div>
            <div className={s.container}>
                <Symbols />
                <div className={s.draggableBlock}/>
            </div>
            <div className={s.container}>
                <Numbers />
                <div className={s.draggableBlock}/>
            </div>
            <div className={s.container}>
                <Result />
                <div className={s.draggableBlock}/>
            </div>
        </div>
    );
};

export default SidebarElements;
