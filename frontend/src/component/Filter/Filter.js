import { React, useEffect, useState } from 'react';
import { Drawer, Tag } from 'antd';
import axios from 'axios';

import './Filter.css';

const Filter = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [tags, setTags] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        loadTags();
        setIsLoading(false)
    }, []);

    useEffect(() => {
        setTags(tags);
    }, [setFilters, filters]);

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

    const handlerAddFilter = (filter) => {
        const filtersTemp = filters;
        const inFilter = filters.includes(filter);
        if (!inFilter) {
            filtersTemp.push(filter);
            setFilters([...filtersTemp]);
        }
        console.log(filters);
    }

    const handlerDeleteFilter = (filter) => {
        const filtersTemp = filters;
        const indexOfFilter = filters.indexOf(filter);
        filtersTemp.splice(indexOfFilter, 1);
        setFilters([...filtersTemp]);
        console.log(filters);
    }

    const formattedTags = tags ? tags.map((tagData, index) => {

        let divStyle = {};
        const inFilter = filters.includes(tagData.tag);

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
                onClick={() => handlerAddFilter(tagData.tag)}
                closable={inFilter}
                onClose={() => handlerDeleteFilter(tagData.tag)}
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