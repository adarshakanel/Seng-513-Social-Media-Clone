// require("dotenv").config({ path: "../../../server/config.env" });

import React from 'react'
import { useContext, useState } from 'react';
import "../css/Navbar.css"
import "../css/MakePost.css"
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Button, Modal, FormControl } from 'react-bootstrap'
import AppContext from '../context/AppContext';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import {useDropzone} from "react-dropzone"
import Dropzone from "../Dropzone/Dropzone"

export const MakePost = () => {
    const [show, setShow] = useState(false);
    const { url, userInfo } = useContext(AppContext)

    // https://medium.com/geekculture/how-to-upload-images-to-cloudinary-with-a-react-app-f0dcc357999c
    // fetch to this url to post image
    const cloudianryUrl = `https://api.cloudinary.com/v1_1/dmieyzfqg/upload`
    const handleClose = () => {
        setShow(false);
        
    }
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
                    <div>
                        <div className='post-component'>
                            <div>                        
                                <div className='drag-drop-content'>
                                    {/**https://blog.logrocket.com/build-drag-and-drop-component-react-dropzone-html-drag-and-drop-api/ */}
                                    <Dropzone />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="inputGroup">
                        <FormControl
                            placeholder="Add a description..."
                            aria-label="Add a description..."
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <Button variant="primary" className='modal-button' onClick={handleClose}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
