import React from 'react';
import axios from 'axios';
import { Tag, Button, Tooltip } from 'antd';
import { YoutubeOutlined, DeleteOutlined } from '@ant-design/icons';
import Tags from './Tags/Tags'
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
    console.log('HERE');
    document.getElementById(id).style.transform = "rotateY(0deg)";
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

  const date = new Date(props.entry.added).toLocaleDateString();

  return (
    <div className='entry-card' id={props.entry.id}>
      <div className='entry-card-inner' id={'inner' + props.entry.id}>
        <div className='entry-card-front' onClick={handlerFlipDiv}>
          <img
            className='entry-card__img'
            alt={props.entry.title}
            src={youtubeVideoID}
          />
          <div className="entry-card__meta">
            {props.entry.title}
          </div>
        </div>
        <div className='entry-card-back' onClick={handlerFlipDivBack}>
          added: {date}<br />
          {props.entry.detail}
          <Tags tags={props.entry.tags} id={props.entry.id} />
          <a href={props.entry.link} target='_blank'>
            <div className="entry-card__play">
              <YoutubeOutlined />
              &nbsp; Watch on Youtube
            </div>
          </a>
          <Tooltip title="Delete video from the list">
            <Button type="primary" danger size='large' shape="circle" icon={<DeleteOutlined />} onClick={handlerDelete} />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Entry