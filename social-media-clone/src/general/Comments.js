import React from 'react';


const Comments = () => {

    const postComment = () => {
        
    }

    return (
        <>
            <div>
                <div className='comment-section'>
                    <form className='commentForm' action=''>
                        <input className="commentInput" autocomplete="off" placeholder="Type a comment" />
                        <button onClick={postComment()}>Post</button>
                    </form>
                </div>
                <small className='view-comments'>View all 5 comments</small>
            </div>
        </>
    )
}

export default Comments;