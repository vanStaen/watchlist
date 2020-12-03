import React from 'react';
import { YoutubeOutlined } from '@ant-design/icons';
import Tags from './Tags/Tags'
import DeleteButton from './Actions/DeleteButton'
import './Entry.css'


const Entry = props => {

  const handlerFlipDiv = () => {
    const id = 'inner' + props.entry.id;
    document.getElementById(id).style.transform = "translateX(-100%) rotateY(-180deg)";
  }

  const handlerFlipDivBack = () => {
    const id = 'inner' + props.entry.id;
    console.log('HERE');
    document.getElementById(id).style.transform = "rotateY(0deg)";
  }

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

          <div className='entry-card-back__header'>
            <div className='entry-card-back__header-added'>Added: {date}</div>
            {props.entry.detail}
          </div>

          <div className='entry-card-back__tags'>
            <Tags tags={props.entry.tags} id={props.entry.id} />
          </div>

          <div className='entry-card-back__actions'>
            <DeleteButton id={props.entry.id} />
          </div>

          <a href={props.entry.link} target='_blank'>
            <div className="entry-card-back__play">
              <YoutubeOutlined />
              &nbsp; Watch on Youtube
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Entry