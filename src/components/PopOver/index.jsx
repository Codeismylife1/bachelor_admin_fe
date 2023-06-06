import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Button from '@mui/material/Button';

import './index.scss'
const BasicPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
      <MoreVertIcon fontSize="small" style={{color: 'gray'}}/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='rowPopOver' >

        <Button sx={{p :2}} size='small'> 
         Дугуй диаграмаар харах
        </Button>
        <Button sx={{p :2}} size='small'> 
            Босоо диаграмаар харах
        </Button>
        </div>
        
      </Popover>
    </div>
  );
}
export default BasicPopover