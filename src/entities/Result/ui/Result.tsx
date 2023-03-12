import React from 'react';
import s from './Result.module.scss';
import {Button} from 'shared/ui';

const Result = () => {
    return (
        <div className={s.Result}>
            <Button className={s.button}>=</Button>
        </div>
    );
};

export default Result;
