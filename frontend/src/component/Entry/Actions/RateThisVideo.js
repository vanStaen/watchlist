import { React, useState } from 'react';
import { Tooltip, Rate } from 'antd';
import axios from 'axios';

const RateThisVideo = props => {

    const [rateValue, setRateValue] = useState(props.rate / 2);

    const patchRatingInDB = () => {
        async function patchEntry() {
            const response = await axios({
                url: 'https://watchlist-cvs.herokuapp.com/watchlist/' + props.id,
                method: 'PATCH',
                data: { 'rate': rateValue }
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const patchResult = await response.data;
            return patchResult;
        }
        // fetch Entries
        patchEntry().then((resData) => {
            const patchResult = resData;
            console.log("Sucess", patchResult);
        }
        ).catch(error => {
            console.log("error", error.message);
        });
    }

    const handlerRateThisVideo = value => {
        setRateValue(value * 2);
        patchRatingInDB();
    }

    return (
        <Tooltip title="Delete video from the list">
            <Rate allowHalf defaultValue={rateValue} onChange={handlerRateThisVideo} />
        </Tooltip>
    )
}

export default RateThisVideo