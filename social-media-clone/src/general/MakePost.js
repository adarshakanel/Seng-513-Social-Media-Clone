import React from 'react'
import { useContext, useState } from 'react';
import "../css/Navbar.css"
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Button, Modal } from 'react-bootstrap'
// import CloseIcon from '@material-ui/icons/Close';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'; export const MakePost = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <AddBoxIcon className='navLink' onClick={handleShow}></AddBoxIcon>

            <Modal className='modal' show={show} onHide={handleClose} animation={false}>
                <Modal.Header className='Header' >
                    <Modal.Title>Create a Post</Modal.Title>
                    {/* <CloseIcon className='closeIcon' onClick={handleClose}></CloseIcon> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="ModBody">
                        <AddPhotoAlternateIcon className='insertPhoto' />
                        <div className="dropText">Drag Image/Video here ...</div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                    <Button variant="primary" className='modal-button' onClick={handleClose}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
