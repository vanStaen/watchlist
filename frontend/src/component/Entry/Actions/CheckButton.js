import React from 'react';
import axios from 'axios';
import { Tooltip, message } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import './Actions.css';

const CheckButton = props => {

    const handlerCheck = (e) => {
        //deleteEntry(props.id);
        message.success({
            content: `Watchlist entry id ${props.id} has been marked as done.`,
            icon: <CheckOutlined />,
        });
    }

    const deleteEntry = (entryID) => {
        const deleteEntryRequest = async (entryID) => {
            const response = await axios({
                url: 'https://watchlist-cvs.herokuapp.com/watchlist/' + entryID,
                method: "DELETE",
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const entries = await response.data;
            return entries;
        }
        // fetch Entries
        deleteEntryRequest(entryID).then((resData) => {
            console.log(resData)
        }
        ).catch(error => {
            console.log(error.message);
        });
    };

    return (
        <Tooltip title="Mark video as viewed">
            <div className="Button Button__check" onClick={handlerCheck}>
                <CheckOutlined />
            </div>
        </Tooltip>
    )
}

export default CheckButton