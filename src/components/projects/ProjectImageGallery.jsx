import React from 'react'
import ImageGallery from "react-image-gallery";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const data= [
    {
        key: "image1",
        original: "https://via.placeholder.com/1080x720?text=Image 1"
    },
    {
        key: "image2",
        original: "https://via.placeholder.com/1080x720?text=Image 2"
    },
    {
        key: "image3",
        original: "https://via.placeholder.com/1080x720?text=Image 3"
    },
    {
        key: "image4",
        original: "https://via.placeholder.com/1080x720?text=Image 4"
    },
    {
        key: "image4",
        original: "https://via.placeholder.com/1080x720?text=Image 5"
    },
]

function ProjectImageGallery({title="Project Title",images=data, open=false, handleClose}) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullScreen
        onClose={handleClose}
        aria-describedby="alert-project-gallery"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
      <ImageGallery items={images} />
          
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}

export default ProjectImageGallery