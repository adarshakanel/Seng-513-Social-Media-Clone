import React, {useContext} from "react";
import { Toast } from "react-bootstrap";
import pfp from '../Resources/man.png'
import '../css/Comment.css'
import AppContext from "../context/AppContext";


export const Comment = (props) => {
    const { url  } = useContext(AppContext)
    return (
        <>
           <Toast>
                <Toast.Header>
                    <img src={pfp} className='profile-picture' />
                    <strong className="username-comment">{/*
                        fetch(url + `${props.userId}`)
                        .then(response => response.json())
                        .then(data => )
                        
    */console.log(props.userId)}</strong>
                    <small>{props.date}</small>
                </Toast.Header>
                <Toast.Body>
                    {props.description}
                </Toast.Body>
            </Toast> 
            
        </>
    )
}

export default Comment;