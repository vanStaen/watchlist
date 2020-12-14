import React from "react";
import { Tag } from 'antd';

import './Filter.css';

const DisplayFilter = (props) => {

    const filters = props.filters;

    const handlerDeleteFilter = (index) => {
        let oldFilters = filters;
        let deletedTags = oldFilters.splice(index, 1);
        props.setFilters(oldFilters);
    }

    const formattedFilters = filters ? filters.map((filter, index) => {
        return (
            <Tag
                className="filter-tag"
                key={index}
                color="#1A2626"
                closable
                onClose={() => handlerDeleteFilter(index)}
            >
                {filter}
            </Tag>
        );
    }) : [];

    return (
        formattedFilters.length > 0 &&
        (<div style={{ marginTop: 20 }}>
            {filters.length != 0 &&
                (<div className='filter'>
                    {formattedFilters} ({props.results} results)
                </div>)
            }
        </div>)
    )
}

export default DisplayFilter;