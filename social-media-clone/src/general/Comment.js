import React, { useContext } from "react";
import { Toast } from "react-bootstrap";
import pfp from '../Resources/man.png'
import '../css/Comment.css'
import AppContext from "../context/AppContext";


export const Comment = (props) => {
    const { url } = useContext(AppContext)
    return (
        <>
            <Toast>
                <Toast.Header>
                    <img src={pfp} className='profile-picture' />
                    <strong className="username-comment">
                        {props.userName}
                    </strong>
                    <small>{props.date.split('T')[0]}</small>
                </Toast.Header>
                <Toast.Body>
                    {props.description}
                </Toast.Body>
            </Toast>

        </>
    )
}

export default Comment;