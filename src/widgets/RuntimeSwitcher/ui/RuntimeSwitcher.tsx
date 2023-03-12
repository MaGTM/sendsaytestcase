import React, {useState} from 'react';
import s from './RuntimeSwitcher.module.scss';
import {ReactComponent as Eye} from 'shared/assets/icons/eye.svg';
import {ReactComponent as Code} from 'shared/assets/icons/selector.svg';
import classNames from 'classnames';

const RuntimeSwitcher = () => {
    const [isRuntime, setIsRuntime] = useState(false);

    return (
        <div className={s.RuntimeSwitcher}>
            <div
                className={classNames(s.switcherElement, {[s.active]: isRuntime})}
                onClick={() => setIsRuntime(true)}
            >
                <Eye />
                <p>Runtime</p>
            </div>
            <div
                className={classNames(s.switcherElement, {[s.active]: !isRuntime})}
                onClick={() => setIsRuntime(false)}
            >
                <Code />
                <p>Constructor</p>
            </div>
        </div>
    );
};

export default RuntimeSwitcher;
