import { React, useEffect, useState } from 'react';
import { Drawer, Tag } from 'antd';
import axios from 'axios';

import './Filter.css';

const Filter = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        loadTags();
    }, []);

    const loadTags = () => {
        async function fetchEntries() {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + "tags",
                method: "GET",
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const tags = await response.data;
            return tags;
        }
        // fetch Entries
        fetchEntries().then((resData) => {
            setTags(resData);
            setIsLoading(false);
        }
        ).catch(error => {
            console.log(error.message);
            setIsLoading(false);
        });
    };

    const onClose = () => {
        props.setIsFilterVisible(false);
    };

    const handlerAddFilter = (filter) => {
        console.log('add this filter:', filter)
    }

    const formattedTags = tags ? tags.map((tagData, index) => {

        let divStyle = {};
        switch (tagData.score) {
            case 1:
                divStyle = {
                    color: "#666",
                    borderColor: "#666"
                }
                break;
            case (tagData.score < 4):
                divStyle = {
                    color: "#999",
                    borderColor: "#999"
                }
                break;
            case (tagData.score < 7):
                divStyle = {
                    color: "#bbb",
                    borderColor: "#bbb"
                }
                break;
            default:
                divStyle = {
                    color: "#fff",
                    borderColor: "#fff"
                }
        }

        return (
            <Tag
                className="clickable"
                style={divStyle}
                key={index}
                color="#233232"
                onClick={() => handlerAddFilter(tagData.tag)}
            >
                {tagData.tag} ({tagData.score})
            </Tag>
        );
    }) : [];

    return (
        <Drawer
            placement="bottom"
            closable={false}
            onClose={onClose}
            visible={props.isFilterVisible}
            getContainer={false}
            height="auto"
        >
            <div className="drawer__listtags">
                {formattedTags}
            </div>
        </Drawer >
    )
}

export default Filter;