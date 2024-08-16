import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { openContext } from './openProvider';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:500,
  bgcolor: 'background.paper',
  borderRadius: 2 ,
    p: 4
};



export default function MaterialModal({trigger , children}) {

  const {open, setOpen} = useContext(openContext);
  


  
  return(
    <div>
      {trigger}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={()=>{
            setOpen(false)
        }}
        closeAfterTransition
        
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        
      >
        <Fade in={open}>
          <Box sx= {style} >
          
         {children}
          </Box>
        </Fade>
      </Modal>

      
    </div>
  );
}
