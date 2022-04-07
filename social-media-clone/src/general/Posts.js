import React, { useRef } from 'react'
import { Card } from 'react-bootstrap'
import './../css/Posts.css'
import postImg from './paris.jpg'
import pfp from '../Resources/man.png'
import Comments from './Comments'

export const Posts = () => {
    const btn = useRef(null);

    return (
        <div id='Post-Section'>
            <Card style={{ maxWidth: '100%', maxHeight: 'auto', width: 'max-content', height: 'auto' }}>
                <Card.Header>
                    <div className='profile-picture'><img src={pfp} /></div>
                    <div className='username'>petermckinnon</div>
                </Card.Header>
                <Card.Body>
                    <div className='post-picture'>
                        <img src={postImg}></img>
                    </div>

                </Card.Body>
                <Card.Footer>

                    <div className='likebtn-desc-post-container'>
                        <div className='post-text'>
                            <p className='post-caption'><span className='footer-username' >petermckinnon </span>Paris is beautiful 😍</p>
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
                    <Comments />
                    
                </Card.Footer>

            </Card>
        </div>
    )
}

export default Posts;