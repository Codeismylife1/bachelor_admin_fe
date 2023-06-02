import React from 'react'
import './index.scss'
import { Divider } from '@mui/material'

const Header = (props) => {
  return (
    <>
    <div className='header'>{props.name}
    </div>
    <Divider />
    </>
  )
}

export default Header