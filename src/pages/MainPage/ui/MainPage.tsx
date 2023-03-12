import React from 'react';
import s from './MainPage.module.scss';
import {SidebarElements} from 'widgets/SidebarElements';
import {RuntimeSwitcher} from 'widgets/RuntimeSwitcher';


const MainPage = () => {
    return (
        <div className={s.MainPage}>
            <RuntimeSwitcher />
            <SidebarElements />
        </div>
    );
};

export default MainPage;
