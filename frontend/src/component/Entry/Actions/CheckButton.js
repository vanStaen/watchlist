import { React, useState } from 'react';
import axios from 'axios';
import { Tooltip, message } from 'antd';
import { CheckOutlined, MinusOutlined } from '@ant-design/icons';

import './Actions.css';

const CheckButton = props => {
    const [isDone, setIsDone] = useState(props.done);

    const patchIsdone = (value) => {
        async function patchEntry() {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + '/' + props.id,
                method: 'PATCH',
                data: { 'done': value }
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
            console.log("Sucess", patchResult);
        }
        ).catch(error => {
            console.log("error", error.message);
        });
    }

    const handlerCheck = (value) => {
        patchIsdone(value);
        setIsDone(value);
        const messageText = value ? 'has been marked as done' : 'is not marked as done anymore';
        message.success({
            content: `Watchlist entry #${props.id} ${messageText}.`,
            icon: <CheckOutlined />,
        });
    }

    return (
        <>
            {!isDone &&
                (
                    <Tooltip title="Mark video as viewed">
                        <div className="Button Button__check" onClick={() => handlerCheck(true)}>
                            <CheckOutlined />
                        </div>
                    </Tooltip>)}
            {isDone &&
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