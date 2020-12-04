import React from 'react';
import axios from 'axios';
import { Button, Tooltip, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const DeleteButton = props => {

    const handlerDelete = (e) => {
        deleteEntry(props.id);
        message.error({
            content: `Watchlist entry id ${props.id} has been deleted.`,
            icon: <DeleteOutlined />,
        });
        document.getElementById(props.id).style.display = "none";
    }

    const deleteEntry = (entryID) => {
        const deleteEntryRequest = async (entryID) => {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + '/' + entryID,
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
        <Tooltip title="Delete video from the list">
            <div className="Button Button__delete" onClick={handlerDelete}>
                <DeleteOutlined />
            </div>
        </Tooltip>
    )
}

export default DeleteButton