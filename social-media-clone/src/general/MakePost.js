// require("dotenv").config({ path: "../../../server/config.env" });

import React from 'react'
import { useContext, useState } from 'react';
import "../css/Navbar.css"
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Button, Modal, FormControl } from 'react-bootstrap'
import AppContext from '../context/AppContext';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
export const MakePost = () => {
    const [show, setShow] = useState(false);
    const { url, userInfo } = useContext(AppContext)

    // https://medium.com/geekculture/how-to-upload-images-to-cloudinary-with-a-react-app-f0dcc357999c
    // fetch to this url to post image
    const cloudianryUrl = `https://api.cloudinary.com/v1_1/dmieyzfqg/upload`
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formVal = {
        imageUrl: '',
        description: '',
        date: ''
    }

    let today = new Date()
    let date = (today.getMonth() + 1) + '-' + today.getDate();
    const [formValues, setFormValues] = useState(formVal)

    const makePost = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: formValues.imageUrl, description: formValues.description, date: date })
        };
        await fetch(url + `${userInfo.userId}`, requestOptions)
            .then(response =>
                response.ok ?
                    console.log("post has been made") && setFormValues(formVal) : null
            )

    }

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
                    <div className="mb-3 inputGroup">
                        <FormControl
                            placeholder="Add a description..."
                            aria-label="Add a description..."
                            aria-describedby="basic-addon1"
                        />
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
