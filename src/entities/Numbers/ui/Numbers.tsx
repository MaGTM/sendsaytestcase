import React from 'react';
import s from './Numbers.module.scss';
import {Button} from 'shared/ui';

interface Number {
    id: number,
    value: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | ','
}

const data: Number[] = [
    {
        id: 1,
        value: '0'
    },
    {
        id: 2,
        value: '1'
    },
    {
        id: 3,
        value: '2'
    },
    {
        id: 4,
        value: '3'
    },
    {
        id: 5,
        value: '4'
    },
    {
        id: 6,
        value: '5'
    },
    {
        id: 7,
        value: '6'
    },
    {
        id: 8,
        value: '7'
    },
    {
        id: 9,
        value: '8'
    },
    {
        id: 10,
        value: '9'
    },
    {
        id: 11,
        value: ','
    },

];

const Numbers = () => {
    return (
        <div className={s.Numbers}>
            {
                data.map(number => {
                    return (
                        <Button
                            className={[s.button, number.value === '0' ? s.zero : '']}
                            key={number.id}
                        >
                            {number.value}
                        </Button>
                    );
                })
            }
        </div>
    );
};

export default Numbers;
