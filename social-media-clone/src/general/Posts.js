import React, { useRef } from 'react'
import {Card} from 'react-bootstrap'
import './../css/Posts.css'
import placeholderImg from './placeholder-img.jpg'

export const Posts = () => {
    const btn = useRef(null);

    return (
        <div id = 'Post-Section'>
            <Card style={{ width: '100%' }}>
                <Card.Header>
                    <div className='profile-picture'>PFP</div>
                    <div className='username'>username</div>
                </Card.Header>
                <Card.Body>
                    <div className='post-picture'>
                        <img src=''></img>    
                    </div>
                    <div className='post-text'>
                        <p>This is my first post!!</p>    
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div ref={btn} id='likeButton' className='unliked' onDoubleClick={()=>{
                        if(btn.current.classList.contains("liked")) {
                            btn.current.classList.remove('liked');
                            btn.current.classList.add('unliked');
                        }
                        else{
                            btn.current.classList.remove('unliked');
                            btn.current.classList.add('liked');
                        }
                    }}></div>
                    <div className='comment-section'>
                        <form className='commentForm' action=''>
                            <input className="commentInput" autocomplete="off" placeholder="Type a comment"/>
                            <button>Send</button>
                        </form>
                    </div>
                </Card.Footer>                
                
            </Card>
        </div>
    )
}

export default Posts;