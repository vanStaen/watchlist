import { React, useEffect, useState } from 'react';
import { Drawer, Tag } from 'antd';
import axios from 'axios';

import './Filter.css';

const Filter = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        loadTags();
        setIsLoading(false)
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

    const handlerClickFilter = (filter) => {

        const inFilter = props.filters.includes(filter);
        const filtersTemp = props.filters;
        if (!inFilter) {
            filtersTemp.push(filter);
            props.setFilters([...filtersTemp]);
        } else {
            const indexOfFilter = props.filters.indexOf(filter);
            filtersTemp.splice(indexOfFilter, 1);
            props.setFilters([...filtersTemp]);
        }
    }

    const formattedTags = tags ? tags.map((tagData, index) => {


        const inFilter = props.filters.includes(tagData.tag);

        let divStyle = {};

        switch (true) {
            case (inFilter):
                divStyle = {
                    color: "#000",
                    borderColor: "#000",
                    backgroundColor: "#26BD90",
                }
                break;
            case (tagData.score < 2):
                divStyle = {
                    color: "#666",
                    borderColor: "#666",
                    backgroundColor: "#233232",
                }
                break;
            case (tagData.score < 3):
                divStyle = {
                    color: "#aaa",
                    borderColor: "#aaa",
                    backgroundColor: "#233232",
                }
                break;
            case (tagData.score < 6):
                divStyle = {
                    color: "#ddd",
                    borderColor: "#ddd",
                    backgroundColor: "#233232",
                }
                break;
            default:
                divStyle = {
                    color: "#fff",
                    borderColor: "#fff",
                    backgroundColor: "#233232",
                }
        }


        return (
            <Tag
                visible={true}
                className="clickable"
                style={divStyle}
                key={index}
                onClick={() => handlerClickFilter(tagData.tag)}
                closable={false}
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
                {isLoading ?
                    (<div style={{ color: "#bbb", borderColor: "#bbb" }}> Loading ... </div>)
                    :
                    (formattedTags)
                }
            </div>
        </Drawer >
    )
}

export default Filter;