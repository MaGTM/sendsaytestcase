import React from 'react';
import s from './Symbols.module.scss';

import {Button} from 'shared/ui';

interface Symbol {
    id: number,
    value: '/' | 'X' | '-' | '+'
}

const data: Symbol[] = [
    {
        id: 1,
        value: '/'
    },
    {
        id: 2,
        value: 'X'
    },
    {
        id: 3,
        value: '-'
    },
    {
        id: 4,
        value: '+'
    },
]

const Symbols = () => {
    return (
        <div className={s.Symbols}>
            {
                data.map(symbol => {
                    return <Button className={s.button} key={symbol.id}>{symbol.value}</Button>
                })
            }
        </div>
    );
};

export default Symbols;
