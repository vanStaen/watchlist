import React from 'react';
import axios from 'axios';
import { Tag } from 'antd';
import './Tags.css'


const Tags = props => {

    const handlerDeleteTag = (e) => {
        console.log(e);
    }

    const tags = props.tags.map(tag => {
        return <Tag closable key={props.id + tag} onClose={handlerDeleteTag} >{tag}</Tag>;
    });

    return (
        <div className='tags'>
            {tags}
        </div>
    )
}

export default Tags