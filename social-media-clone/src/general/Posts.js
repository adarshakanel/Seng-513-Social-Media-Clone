import React, { useRef, useState, useEffect, useContext } from 'react'
import { Card, FormControl } from 'react-bootstrap'
import './../css/Posts.css'
import Comment from './Comment'
import AppContext from '../context/AppContext'



export const Posts = (props) => {
    const { userInfo } = useContext(AppContext)
    const [commentInput, setCommentInput] = useState('');
    let commentUrl = 'http://localhost:5000/comment/'

    const postComment = async (e) => {
        e.preventDefault();
        if (commentInput != '') {
            await makeComment(props.postId, date, commentInput);
            setCommentInput('');
            props.setChange(!props.change)

        }
    }

    let date = new Date(Date.now()).toISOString();

    const makeComment = async (postId, date, comment) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description: comment, date, userName: userInfo.fullName, pfp: userInfo.pfp })
        }
        await fetch(commentUrl + `${postId}`, requestOptions)
            .then(response =>
                response.ok ?
                    console.log("Comment has been made") : null)
    }

    const btn = useRef(null);

    function makeObject(id, description, date) {
        return (
            {
                id, description, date
            }
        )
    }

    // useEffect(()=>{
    //     fetch(commentUrl + `${props.postId}`)
    //         .then(response => response.json())
    //         .then(data =>{
    //             setComments(data.map(comment => (
    //                 makeObject(comment._id, comment.description, comment.date)
    //             )))
    //         })

    // }, [])

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
                        {
                            props.comments ?
                                props.comments.sort(function (a, b) {
                                    return new Date(a.date) - new Date(b.date)
                                }).map(comment => comment ?
                                    (
                                        <Comment
                                            userName={comment.userName}
                                            description={comment.description}
                                            date={comment.date}
                                        />
                                    ) : <></>
                                )
                                : <></>
                        }
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