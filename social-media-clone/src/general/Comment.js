import React from "react";
import { Toast } from "react-bootstrap";
import pfp from '../Resources/man.png'
import '../css/Comment.css'

export const Comment = (props) => {
    return (
        <>
           <Toast>
                <Toast.Header>
                    <img src={pfp} className='profile-picture' />
                    <strong className="username-comment">user</strong>
                    <small>10 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                    comment
                </Toast.Body>
            </Toast> 
            
        </>
    )
}

export default Comment;