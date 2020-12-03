import { React, useState } from 'react';
import { Tag, Input } from 'antd';
import './Tags.css'

const Tags = props => {
    const [tags, setTags] = useState(props.tags);
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');

    const handlerDeleteTag = (e) => {
        console.log(e);
    }

    const saveEditInputRef = input => {
        console.log(input);
        //this.editInput = input;
    };

    const handleEditInputChange = e => {
        console.log(e.target.value);
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        console.log(confirm);
    };

    const formattedTags = tags.map((tag, index) => {

        const isLongTag = tag.length > 20;

        if (editInputIndex === index) {
            return (
                <Input
                    ref={saveEditInputRef}
                    key={tag}
                    size="small"
                    className="tag-input"
                    value={editInputValue}
                    onChange={handleEditInputChange}
                    onBlur={handleEditInputConfirm}
                    onPressEnter={handleEditInputConfirm}
                />
            );
        }

        return (
            <Tag
                className="edit-tag"
                key={index}
                closable
                onClose={handlerDeleteTag}
            >
                <span
                    onDoubleClick={e => {
                        if (index !== 0) {
                            setEditInputIndex(index);
                            setEditInputValue(tag);
                            e.preventDefault();
                        }
                    }}
                >
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </span>
            </Tag>
        );
    });

    return (
        <div className='tags'>
            {formattedTags}
        </div>
    )
}

export default Tags




/*
class EditableTagGroup extends React.Component {

    state = {
        tags: ['Unremovable', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
    };

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    handleEditInputChange = e => {
        this.setState({ editInputValue: e.target.value });
    };

    handleEditInputConfirm = () => {
        this.setState(({ tags, editInputIndex, editInputValue }) => {
            const newTags = [...tags];
            newTags[editInputIndex] = editInputValue;

            return {
                tags: newTags,
                editInputIndex: -1,
                editInputValue: '',
            };
        });
    };

    saveInputRef = input => {
        this.input = input;
    };

    saveEditInputRef = input => {
        this.editInput = input;
    };

    render() {
        return (
            <>
                {tags.map((tag, index) => {
                    if (editInputIndex === index) {
                        return (
                            <Input
                                ref={this.saveEditInputRef}
                                key={tag}
                                size="small"
                                className="tag-input"
                                value={editInputValue}
                                onChange={this.handleEditInputChange}
                                onBlur={this.handleEditInputConfirm}
                                onPressEnter={this.handleEditInputConfirm}
                            />
                        );
                    }

                    const isLongTag = tag.length > 20;

                    const tagElem = (
                        <Tag
                            className="edit-tag"
                            key={tag}
                            closable={index !== 0}
                            onClose={() => this.handleClose(tag)}
                        >
                            <span
                                onDoubleClick={e => {
                                    if (index !== 0) {
                                        this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                                            this.editInput.focus();
                                        });
                                        e.preventDefault();
                                    }
                                }}
                            >
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </span>
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                            tagElem
                        );
                })}
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag className="site-tag-plus" onClick={this.showInput}>
                        <PlusOutlined /> New Tag
                    </Tag>
                )}
            </>
        );
    }
}
 */