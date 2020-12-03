import React from 'react';
import { Tooltip, Rate } from 'antd';

const RateThisVideo = props => {

    const handlerRateThisVideo = (e) => {
        console.log(props.id);
    }

    return (
        <Tooltip title="Delete video from the list">
            <Rate allowHalf defaultValue={0} onChange={handlerRateThisVideo} />
        </Tooltip>
    )
}

export default RateThisVideo