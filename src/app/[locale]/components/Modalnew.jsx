"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactPlayer from "react-player";
import {useDisclosure} from "@nextui-org/react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 30,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let videosrc = "/PacmanVideo.mp4";
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="relative rounded-lg pt-[59.25%]">
                    <ReactPlayer
                    url={videosrc}
                    playing={isOpen} // Control play state based on modal open state
                    controls={true}
                    light={false}
                    pip={false}
                    loop={true}
                    width="98%"
                    height="98%"
                    className='absolute top-0 left-0'
                    />
                </div>
        </Box>
      </Modal>
    </div>
  );
}
