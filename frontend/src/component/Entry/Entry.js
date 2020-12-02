import React from 'react'
import './Entry.css'

const Entry = props => {

  const youtubeVideoID =
    'https://img.youtube.com/vi/' +
    props.entry.link.split('&')[0].split('=')[1] +
    '/0.jpg'

  return (
    <div className='entry-card'>
      <div className='entry-card-inner'>
        <div className='entry-card-front'>
          <a href={props.entry.link} target='_blank'>
            <img
              className='entry-card__img'
              alt={props.entry.title}
              src={youtubeVideoID}
            />
          </a>
          <div className="entry-card__meta">
            {props.entry.title}
          </div>
        </div>
        <div className='entry-card-back'>
          Backside
        </div>
      </div>
    </div>
  )
}

export default Entry