import { Box, Button, Modal } from '@mui/material'
import React from 'react'
import CreateEvent from './CreateEvent';
import { EventCard } from '../../component/Profile/EventCard';
import { useDispatch, useSelector } from 'react-redux';
const style = {
  position: 'absolute',
  top: '70%', // Thay đổi vị trí cho hợp lý
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  maxWidth: 600,
  maxHeight: '80vh', // Giới hạn chiều cao
  overflowY: 'auto', // Thêm thanh cuộn nếu nội dung vượt quá chiều cao
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const Events = ({ sidebarOpen }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  return(
    <div>
      <div className='p-5'>
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-3' : 'ml-12'}`}>
         <Button 
        onClick={handleOpen}
        variant='contained'>
          Create New Event
        </Button>
        <div className='mt-5 px-5 flex flex-wrap gap-5'>
      {[1,1,1,1].map((item)=> <EventCard/>)}
    </div>
         </div>
     
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
     <CreateEvent />
        </Box>
      </Modal>
      </div>
    </div>
  )
}
