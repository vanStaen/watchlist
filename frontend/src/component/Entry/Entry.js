import React from 'react';
import axios from 'axios';
import { Tag, Button, Tooltip } from 'antd';
import { YoutubeOutlined, DeleteOutlined } from '@ant-design/icons';
import './Entry.css'


const Entry = props => {

  const handlerDeleteTag = (e) => {
    console.log(e);
  }

  const handlerDelete = (e) => {
    deleteEntry(props.entry.id);
    document.getElementById(props.entry.id).style.display = "none";
  }

  const handlerFlipDiv = () => {
    const id = 'inner' + props.entry.id;
    document.getElementById(id).style.transform = "translateX(-100%) rotateY(-180deg)";
  }

  const handlerFlipDivBack = () => {
    const id = 'inner' + props.entry.id;
    document.getElementById(id).style.transform = "rotateY(-180deg)";
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


  const youtubeVideoID =
    'https://img.youtube.com/vi/' +
    props.entry.link.split('&')[0].split('=')[1] +
    '/0.jpg'

  const tags = props.entry.tags.map(tag => {
    return <Tag closable onClose={handlerDeleteTag} >{tag}</Tag>;
  });

  const date = new Date(props.entry.added).toLocaleDateString();

  return (
    <div className='entry-card' id={props.entry.id}>
      <div className='entry-card-inner' id={'inner' + props.entry.id}>
        <div className='entry-card-front'>
          <img
            className='entry-card__img'
            alt={props.entry.title}
            src={youtubeVideoID}
          />
          <div className="entry-card__meta" onClick={handlerFlipDiv}>
            {props.entry.title}
          </div>
        </div>
        <div className='entry-card-back' onClick={handlerFlipDivBack}>
          added: {date}<br />
          {props.entry.detail}
          <div className='entry-card-back__tags'>
            {tags}
          </div>
          <a href={props.entry.link} target='_blank'>
            <Tag className='watchOnYoutube' icon={<YoutubeOutlined />} color="#cd201f">
              Watch on Youtube
            </Tag>
          </a>
          <Tooltip title="Delete video from the list">
            <Button type="primary" danger size='small' shape="circle" icon={<DeleteOutlined />} onClick={handlerDelete} />
          </Tooltip>
        </div>
      </div>
    </div >
  )
}

export default Entry