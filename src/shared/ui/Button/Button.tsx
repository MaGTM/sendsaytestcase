import React, { FC } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
    className?: string | string[],
    children: React.ReactNode
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children
    } = props;
    return (
        <button className={classNames(s.Button, className)}>
            {children}
        </button>
    );
};

export default Button;
