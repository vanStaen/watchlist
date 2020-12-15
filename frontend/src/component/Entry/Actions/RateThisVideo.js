import { React } from 'react';
import { Tooltip, Rate, notification } from 'antd';
import axios from 'axios';

const RateThisVideo = props => {

    const patchRatingInDB = (value) => {
        async function patchEntry() {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + "watchlist/" + props.id,
                method: 'PATCH',
                data: { 'rate': value }
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const patchResult = await response.data;
            return patchResult;
        }
        // fetch Entries
        patchEntry(value).then((resData) => {
            const patchResult = resData;
            //console.log("Sucess", patchResult);
            notification.success({
                message: 'Rating saved!',
                description:
                    `Your ${value}-star rating of entry #${props.id} has been successfully saved.`,
                placement: "bottomRight",
            });
        }
        ).catch(error => {
            console.log("error", error.message);
            notification.error({
                message: 'Error!',
                description: error.message,
                placement: "bottomRight",
            });
        });
    }

    const handlerRateThisVideo = value => {
        patchRatingInDB(value);
    }

    return (
        <Tooltip title="Delete video from the list">
            <Rate defaultValue={props.rate} onChange={handlerRateThisVideo} />
        </Tooltip>
    )
}

export default RateThisVideo