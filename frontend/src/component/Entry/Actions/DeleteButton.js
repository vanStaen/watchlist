import React from 'react';
import axios from 'axios';
import { Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


const DeleteButton = props => {

    const handlerDelete = (e) => {
        deleteEntry(props.id);
        document.getElementById(props.id).style.display = "none";
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
        <Tooltip title="Delete video from the list">
            <Button type="primary" danger size='large' shape="circle" icon={<DeleteOutlined />} onClick={handlerDelete} />
        </Tooltip>
    )
}

export default DeleteButton