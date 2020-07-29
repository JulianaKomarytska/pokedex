import React from 'react';
import {observer} from 'mobx-react';

import './common.scss';


const PaginationBtn = (props) => {
    const {link, className, actions, text} = props.data;
    console.log('action', actions);
    const getOtherPage = () => {
        console.log('getOtherPage');
        actions(link)
    }
    return (
        <div onClick={getOtherPage} className={className}></div>
    )
};

export default observer(PaginationBtn)