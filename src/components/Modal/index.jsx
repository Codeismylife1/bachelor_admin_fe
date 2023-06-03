import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MySnackBar from '../SnackBar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const  MyModal = () =>{
  const [openModal, setOpenModal] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {setOpenModal(false);

}

const handleSnackBar = ( ) => {
    // handleCloseModal(false);
    // setOpenSnack(true);
    console.log("snack bar neew")
}

  return (
    <div>
      <div onClick={handleOpenModal}>Засах</div>
      
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
         Сургууль засах
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        <Button onClick={handleCloseModal}> Цуцлах</Button>
        <Button onClick={handleSnackBar}> Засах</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default MyModal