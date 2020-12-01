import React from 'react'
import './Menu.css'

const MenuItem = (props) => {

  const classNameItem = props.straightText ? 'MenuItem MenuItem_straight' : 'MenuItem MenuItem__turned';

  return (
    <a href="#" alt={props.title}>
      <div className={classNameItem}>
        {props.title}
      </div>
    </a>
  )
}

export default MenuItem