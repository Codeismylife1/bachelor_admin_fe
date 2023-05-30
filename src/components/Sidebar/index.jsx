import React from 'react'
import "./index.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import  PersonOutline from '@mui/icons-material/PercentOutlined'
const Sidebar = () => {
    const garchig = 'IKH ZASAG'
  return (
    <div className="sidebar"> 
    <div className="top"> 
    <span className="logo"> { garchig}</span>
    </div>
    <hr />
    <div className='center'> 
        <ul>
                <p className="title"> ХЯНАХ САМБАР</p>
            <li> 
                <DashboardIcon className='icon' />
                <span> Нүүр</span>
            </li>
            <p className="title"> LIST</p>
            <li> 
                <PersonOutline className="icon" />
                <span> Сургууль</span>
            </li>
            <li> 
            <PersonOutline className="icon" />

                <span> Хөтөлбөрүүд</span>
            </li>
            <li> 
            <PersonOutline className="icon" />

                <span> Мэргэжил</span>
            </li>
            <p className="title"> КОМИСС</p>
            <li> 
            <PersonOutline className="icon" />

                <span> Комисс харах</span>
            </li>
            <li> 
            <PersonOutline className="icon" />

                <span> Комисс  томилох</span>
            </li>
            <p className="title"> ХҮСНЭГТ </p>
            <li> 
            <PersonOutline className="icon" />

                <span> График</span>
            </li>
        </ul>
    </div>
    {/* <div className="bottom">
        <div className="colorOption"></div>        
        <div className="colorOption"></div>        
        <div className="colorOption"></div>        
    </div> */}
    </div>
  )
}

export default Sidebar