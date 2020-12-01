import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'

const Menu = () => {

  return (
    <div className='Menu'>
      <MenuItem title="add" />
      <MenuItem title="filter" />
      <MenuItem title="?" straightText={true} />
    </div>
  )
}

export default Menu