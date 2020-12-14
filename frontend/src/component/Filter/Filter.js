import React from "react";
import { Tag } from 'antd';

import './Filter.css';

const Filter = (props) => {

    const filters = props.filters;

    const handlerDeleteFilter = () => {
        console.log('click');
    }

    const formattedFilters = filters ? filters.map((filter, index) => {
        return (
            <Tag
                className="filter-tag"
                key={index}
                color="#2B3131"
                closable
                onClose={() => handlerDeleteFilter(index)}
            >
                {filter}
            </Tag>
        );
    }) : [];


    return (
        <div style={{ marginTop: 20 }}>
            {filters.length != 0 &&
                (<div className='filter'>
                    Filter: {formattedFilters} ({props.results} results)
                </div>)
            }
        </div>
    )
}

export default Filter;