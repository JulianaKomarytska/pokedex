import React from 'react';
import {observer} from 'mobx-react';

import './common.scss';


const PaginationBtn = (props) => {
    const {link, className, actions} = props.data;
    const getOtherPage = () => {
        actions(link);
        document.documentElement.scrollTop -=document.documentElement.scrollTop
    };
    return (
        <div onClick={getOtherPage} className={className}/>
    )
};

export default observer(PaginationBtn)