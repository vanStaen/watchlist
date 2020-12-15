import { React } from 'react';
import { Drawer, Tag } from 'antd';

import './Filter.css';

const Filter = (props) => {

    const onClose = () => {
        props.setIsFilterVisible(false);
    };

    const handlerAddFilter = (filter) => {
        console.log('add this filter:', filter)
    }

    const tags = ['javascript', 'vanilla'];

    const formattedTags = tags ? tags.map((tag, index) => {
        return (
            <Tag
                className="filter-tag clickable"
                key={index}
                color="#1A2626"
                onClick={() => handlerAddFilter(tag)}
            >
                {tag}
            </Tag>
        );
    }) : [];

    return (
        <Drawer
            placement="top"
            closable={true}
            onClose={onClose}
            visible={props.isFilterVisible}
            getContainer={false}
            height="auto"
        >
            <div className="drawer__listtags">
                {formattedTags}
            </div>
        </Drawer >
    )
}

export default Filter;