import { React, useState } from 'react';
import { YoutubeOutlined, UndoOutlined, CheckOutlined } from '@ant-design/icons';
import Tags from './Tags/Tags';
import DeleteButton from './Actions/DeleteButton';
import RateThisVideo from './Actions/RateThisVideo';
import CheckButton from './Actions/CheckButton';
import Title from './Title/Title';
import Bookmark from './Bookmark/Bookmark';
import './Entry.css';

const Entry = (props) => {
  const [isDone, setIsDone] = useState(props.entry.done);
  const [isBookmarked, setIsBookmarked] = useState(props.entry.bookmark);
  const [showBookmarkOnFront, setShowBookmarkOnFront] = useState(props.entry.bookmark);

  const id = 'inner' + props.entry.id;
  const img = 'img' + props.entry.id;
  const img_done = 'done' + props.entry.id;

  const handlerFlipDiv = () => {
    document.getElementById(id).style.transform = "translateX(-100%) rotateY(-180deg)";
    isDone ? setTimeout(function () { document.getElementById(img_done).style.display = "none"; }, 500) : '';
    isBookmarked ? setTimeout(function () { setShowBookmarkOnFront(false); }, 200) : '';
    setTimeout(function () { document.getElementById(img).style.display = "none"; }, 500);

  }

  const handlerFlipDivBack = () => {
    isDone ? document.getElementById(img_done).style.display = "block" : '';
    document.getElementById(img).style.display = "block";
    document.getElementById(id).style.transform = "rotateY(0deg)";
    setTimeout(function () { setShowBookmarkOnFront(isBookmarked); }, 250);
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
          {showBookmarkOnFront && (
            <Bookmark
              id={props.entry.id}
              setIsBookmarked={setIsBookmarked}
              isBookmarked={isBookmarked}
              front={true}
            />)}
          {isDone && (
            <div className='entry-card-front__done' id={'done' + props.entry.id} >
              < CheckOutlined />
            </div>)}
          <img
            className='entry-card__img'
            id={'img' + props.entry.id}
            alt={props.entry.title}
            src={youtubeVideoID}
          />
          <div className="entry-card__meta">
            {props.entry.title}
          </div>
        </div>
        <div className='entry-card-back'>
          <Bookmark
            id={props.entry.id}
            setIsBookmarked={setIsBookmarked}
            isBookmarked={isBookmarked}
            token={props.token}
            front={false}
          />
          <div className='entry-card-back-corner' onClick={handlerFlipDivBack} >
            <UndoOutlined />
          </div>
          <div className='entry-card-back__header'>
            <div className='entry-card-back__header-added'>#{props.entry.id}, Added: {date}</div>
            <Title
              id={props.entry.id}
              title={props.entry.title}
              token={props.token}
            />
          </div>

          <div className='entry-card-back__tags'>
            <Tags
              tags={props.entry.tags}
              id={props.entry.id}
              token={props.token}
            />
          </div>

          <div className='entry-card-back__actions'>
            <CheckButton
              id={props.entry.id}
              setIsDone={setIsDone}
              sDone={isDone}
              token={props.token}
            />
            <RateThisVideo
              id={props.entry.id}
              rate={props.entry.rate}
              token={props.token}
            />
            <DeleteButton
              id={props.entry.id}
              token={props.token}
            />
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