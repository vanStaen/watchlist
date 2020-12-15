import { React } from 'react';
import axios from 'axios';
import { Tooltip, notification } from 'antd';
import { CheckOutlined, MinusOutlined } from '@ant-design/icons';

import './Actions.css';

const CheckButton = props => {

    const patchIsdone = (value) => {
        async function patchEntry() {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + "watchlist/" + props.id,
                method: 'PATCH',
                data: { 'done': value }
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const patchResult = await response.data;
            return patchResult;
        }
        // patch entry
        patchEntry(value).then((resData) => {
            const patchResult = resData;
            console.log("Sucess", patchResult);

            const messageTitle = value ? 'Watched!' : 'Let me come back to this again ...';
            const messageText = value ? 'has been marked as done' : 'is not marked as done anymore';

            notification.success({
                message: messageTitle,
                description:
                    `Watchlist entry #${props.id} ${messageText}.`,
                placement: "bottomRight",
            });

        }
        ).catch(error => {
            console.log("error", error.message);

            notification.error({
                message: "Error",
                description: error.message,
                placement: "bottomRight",
            });

        });
    }

    const handlerCheck = (value) => {
        patchIsdone(value);
        props.setIsDone(value);
    }

    return (
        <>
            {!props.isDone &&
                (
                    <Tooltip title="Mark video as viewed">
                        <div className="Button Button__check" onClick={() => handlerCheck(true)}>
                            <CheckOutlined />
                        </div>
                    </Tooltip>)}
            {props.isDone &&
                (
                    <Tooltip title="Unmark video as viewed">
                        <div className="Button Button__uncheck" onClick={() => handlerCheck(false)}>
                            <MinusOutlined />
                        </div>
                    </Tooltip>)}
        </>
    )
}

export default CheckButton