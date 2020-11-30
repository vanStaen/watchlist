import React from 'react'
import { Image, Card } from 'antd'
import { Spin } from 'antd'

import './Entry.css'

const Entry = props => {

  const youtubeVideoID =
    'https://img.youtube.com/vi/' +
    props.entry.link.split('&')[0].split('=')[1] +
    '/0.jpg'

  return (
    <div className='entry-card'>
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
  )
}

export default Entry