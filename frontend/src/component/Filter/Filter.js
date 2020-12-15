import { React, useState } from 'react';
import { Drawer, Button } from 'antd';

import './Filter.css';

const Filter = (props) => {

    const onClose = () => {
        props.setIsFilterVisible(false);
    };

    return (
        <Drawer
            placement="top"
            closable={true}
            onClose={onClose}
            visible={props.isFilterVisible}
            getContainer={false}
            height="auto"
        >
            <span>filters</span>
        </Drawer >
    )
}

export default Filter;