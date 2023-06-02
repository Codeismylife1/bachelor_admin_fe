import React from 'react'
import './index.scss'

const MyContainer = (props) => {
  return (
    <div className='myContainer'>{props.children}</div>
  )
}

export default MyContainer