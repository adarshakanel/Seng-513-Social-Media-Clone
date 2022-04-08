import React, { useRef } from 'react'
import { Card } from 'react-bootstrap'
import './../css/Posts.css'
import postImg from './paris.jpg'
import pfp from '../Resources/man.png'

export const Posts = (props) => {
    const btn = useRef(null);

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

                    <div className='comment-section'>
                        <form className='commentForm' action=''>
                            <input className="commentInput" autocomplete="off" placeholder="Type a comment" />
                            <button>Post</button>
                        </form>
                    </div>
                    <small className='view-comments'>View all 5 comments</small>
                </Card.Footer>

            </Card>
        </div>
    )
}

export default Posts;