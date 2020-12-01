import React from 'react'
import './Menu.css'

const MenuItem = (props) => {

  return (
    <a href="#" alt={props.title}>
      <div className='MenuItem'>
        {props.title}
      </div>
    </a>
  )
}

export default MenuItem