import React from 'react';
import axios from 'axios';
import { Popconfirm, Tooltip, notification } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const DeleteButton = props => {
    const [confirmVisible, setconfirmVisible] = React.useState(false);

    const handlerDelete = (e) => {
        setconfirmVisible(false);
        deleteEntry(props.id);
        document.getElementById(props.id).style.display = "none";
    }

    const deleteEntry = (entryID) => {
        const deleteEntryRequest = async (entryID) => {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + "watchlist/" + entryID,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + props.token,
                },
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const entries = await response.data;
            return entries;
        }
        // fetch Entries
        deleteEntryRequest(entryID).then((resData) => {
            //console.log(resData)
            notification.error({
                message: 'Deleted!',
                description:
                    `Watchlist entry #${props.id} has been deleted.`,
                icon: <DeleteOutlined />,
                placement: "bottomRight",
            });
        }
        ).catch(error => {
            console.log(error.message);
            notification.error({
                message: 'Error!',
                description: error.message,
                icon: <DeleteOutlined />,
                placement: "bottomRight",
            });
        });
    };

    const showDeleteConfirm = () => {
        setconfirmVisible(true);
    };

    const handleCancelDelete = () => {
        setconfirmVisible(false);
    };

    return (
        <Tooltip title="Delete video from the list">
            <Popconfirm
                title="Are you sure? This is forever."
                placement="bottom"
                visible={confirmVisible}
                onConfirm={handlerDelete}
                onCancel={handleCancelDelete}
                okText="Yes"
                cancelText="No"
            >
                <div className="Button Button__delete" onClick={showDeleteConfirm}>
                    <DeleteOutlined />
                </div>
            </Popconfirm>
        </Tooltip >
    )
}

export default DeleteButton