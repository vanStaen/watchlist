import { React } from 'react';
import bookmark from './bookmark.png'
import { Tooltip, notification } from 'antd';
import axios from 'axios';

import './Bookmark.css';

const Bookmark = props => {

    const patchBookmark = (value) => {
        async function patchEntry(value) {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + "watchlist/" + props.id,
                method: 'PATCH',
                data: { 'bookmark': value },
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
        patchEntry(value).then(() => {
            const messageTitle = value ? 'Bookmarked!' : 'Bookmarked deleted';
            const messageText = value ? 'will appears with a bookmark from now on.' : 'is not bookmarked anymore';
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
                description: error.message,
                placement: "bottomRight",
            });
        });
    }


    const handlerBookmarking = (value) => {
        props.setIsBookmarked(value);
        patchBookmark(value);
    }

    const bookmarked = props.isBookmarked;
    const front = props.front;

    return (
        <div className="bookmark" id="bookmark">
            {front ?
                (bookmarked &&
                    (<img
                        className="bookmark__img"
                        src={bookmark}
                        alt={bookmark}>
                    </img>)
                )
                :
                (bookmarked ?
                    (<Tooltip placement="right" title="Delete the bookmark.">
                        <img
                            onClick={() => handlerBookmarking(false)}
                            className="bookmark__img clickable"
                            src={bookmark}
                            alt={bookmark}>
                        </img>
                    </Tooltip>)
                    :
                    (<Tooltip placement="right" title="Bookmark this.">
                        <img
                            onClick={() => handlerBookmarking(true)}
                            className="bookmark__img clickable grey"
                            src={bookmark}
                            alt={bookmark}>
                        </img>
                    </Tooltip>)
                )
            }
        </div >
    )
}

export default Bookmark