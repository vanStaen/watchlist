import { React, useState } from 'react';
import axios from 'axios';
import { Tooltip, Input } from 'antd';

import './Title.css';

const CheckButton = props => {
    const [editMode, setEditMode] = useState(false);
    const [editInputValue, setEditInputValue] = useState(props.title);

    const patchTitel = (value) => {
        async function patchEntry() {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + "watchlist/" + props.id,
                method: 'PATCH',
                data: { 'title': value },
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + props.token,
                },
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
        }
        ).catch(error => {
            notification.error({ error: error.message, });
            console.log("error", error.message);
        });
    }

    const handlerShowEditInput = (value) => {
        setEditMode(true);
    }

    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    }

    const handleEditInputCancel = () => {
        setEditInputValue(props.title);
        setEditMode(false);
    }

    const handleEditInputConfirm = (e) => {
        patchTitel(e.target.value)
        setEditMode(false);
    }

    const howLongIsLong = 36;
    const isLongTitle = editInputValue.length > howLongIsLong;

    return (
        <>
            {!editMode &&
                (<div onDoubleClick={handlerShowEditInput}>
                    {isLongTitle ? `${editInputValue.slice(0, howLongIsLong)}...` : editInputValue}
                </div>)}
            {editMode &&
                (<Tooltip title="Press enter to save your cahnges">
                    <div>
                        <Input
                            key={"editTitle" + props.id}
                            size="small"
                            className="title-edit-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputCancel}
                            onPressEnter={handleEditInputConfirm}
                        />
                    </div>
                </Tooltip>)}
        </>
    )
}

export default CheckButton