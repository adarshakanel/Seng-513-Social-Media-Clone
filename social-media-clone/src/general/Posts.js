import React, { useRef, useState, useEffect } from 'react'
import { Card, FormControl } from 'react-bootstrap'
import './../css/Posts.css'
import Comment from './Comment'
import AppContext from '../context/AppContext'



export const Posts = (props) => {

    const [commentInput, setCommentInput] = useState('');
    const[comments, setComments] = useState([])
    let commentUrl = 'http://localhost:5000/comment/'

    const postComment = (e) => {
        e.preventDefault();
        if(commentInput != ''){
            makeComment(props.postId, date, commentInput);
            setCommentInput('');
        }
    }

    let date = new Date(Date.now()).toISOString();

    const makeComment = async (postId, date, comment) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({description: comment, date})
        }
        await fetch(commentUrl + `${postId}`, requestOptions)
            .then(response =>
                    response.ok ?
                        console.log("Comment has been made"): null)
    }

    const btn = useRef(null);

    function makeObject(id, description, date) {
        return(
            {
                id, description, date
            }
        )
    }

//    useEffect(()=>{
//        setComments([])
//        fetch(commentUrl + `${props.postId}`)
//            .then(response => response.json())
//            .then(data =>{
//                setComments(data.map(comment => (
//                    makeObject(comment._id, comment.description, comment.date)
//                )))
//            })
//
//    }, [])

    return (
        <div id='Post-Section'>
            <Card style={{ maxWidth: '100%', maxHeight: 'auto', width: 'max-content', height: 'auto' }}>
                <Card.Header>
                    <div className='profile-picture'><img src={props.pfp} /></div>
                    <div className='username'>{props.username}</div>
                </Card.Header>
                <Card.Body>
                    <div className='post-picture'>
                        <img src={props.image}></img>
                    </div>

                </Card.Body>
                <Card.Footer>

                    <div className='likebtn-desc-post-container'>
                        <div className='post-text'>
                            <p className='post-caption'><span className='footer-username' >{props.username} </span>{props.description}</p>
                        </div>
                        <div ref={btn} id='likeButton' className='unliked' onClick={() => {
                            if (btn.current.classList.contains("liked")) {
                                btn.current.classList.remove('liked');
                                btn.current.classList.add('unliked');
                            }
                            else {
                                btn.current.classList.remove('unliked');
                                btn.current.classList.add('liked');
                            }
                        }}></div>

                    </div>
                    
                    <div className='scrollable-comments'>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                    <div className='comment-section'>
                        <FormControl 
                            className='commentInput'
                            placeholder="Type a comment"
                            value={commentInput}
                            onChange={e => setCommentInput(e.target.value)}
                            type="text"
                        />
                        <button className='comment-post-btn' onClick={postComment}>
                            Post
                        </button>
                    </div>
                    
                </Card.Footer>

            </Card>
        </div>
    )
}

export default Posts;