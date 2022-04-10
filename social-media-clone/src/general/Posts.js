import React, { useRef, useState, useEffect, useContext } from 'react'
import { Card, FormControl } from 'react-bootstrap'
import './../css/Posts.css'
import Comment from './Comment'
import AppContext from '../context/AppContext'



export const Posts = (props) => {
    const { userInfo } = useContext(AppContext)
    const [commentInput, setCommentInput] = useState('');

    let commentUrl = 'http://localhost:5000/comment/'
    let likeUrl = 'http://localhost:5000/post/';
    let unlikeUrl = 'http://localhost:5000/post/unlike/';

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

    const likePost = async () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: props.postId })
        }
        await fetch(likeUrl + `${userInfo.userId}`, requestOptions)
            .then(response =>
                response.ok ?
                    console.log("Liked") : null)
        props.setChange(!props.change)

    }

    const unlikePost = async () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: props.postId })
        }
        await fetch(unlikeUrl + `${userInfo.userId}`, requestOptions)
            .then(response =>
                response.ok ?
                    console.log("Unliked") : null)
        props.setChange(!props.change)

    }

    const likeStatus = () => {
        if (props.likedBy == null)
            return 'unliked'
        for (const like of props.likedBy) {
            if (like._id === userInfo.userId)
                return 'liked'
        }
        return 'unliked'
    }

    const likeCount = () => {
        if (props.likedBy == null)
            return '0'
        else {
            return props.likedBy.length;
        }
    }

    return (
        <div id='Post-Section'>
            <Card style={{ maxWidth: '100%', maxHeight: 'auto', width: 'max-content', height: 'auto' }}>
                <Card.Header>
                    <div className='profile-picture'><img src={userInfo.pfp} /></div>
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
                        <div className='like-area'>
                            <div ref={btn} id='likeButton' className={likeStatus()} onClick={() => {
                                if (btn.current.classList.contains("liked")) {
                                    btn.current.classList.remove('liked');
                                    btn.current.classList.add('unliked');
                                    unlikePost();
                                }
                                else {
                                    btn.current.classList.remove('unliked');
                                    btn.current.classList.add('liked');
                                    likePost();
                                }
                            }}></div>
                            <div classNumber='number-likes'>{likeCount()}</div>
                        </div>
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
