import { useState, useEffect, useContext } from 'react'
import Post from './Posts'
import './../css/Home.css'
import AppContext from '../context/AppContext'

export const Home = () => {
    const { userInfo, url, show } = useContext(AppContext)
    const [change, setChange] = useState(false)
    const followingPostsExample = [{
        userId: 0,
        posts: []
    }]
    const [followingPosts, setFollowingPosts] = useState([])
    const [selfPosts, setSelfPosts] = useState(null)

    function makeObject(username, pfp, userId, postId, image, comments, date, likedBy, description) {
        return (
            {
                username, pfp, userId, postId, image, comments, date, likedBy, description
            }
        )
    }

    useEffect(() => {
        setFollowingPosts([])
        setSelfPosts({})
        // console.log(userInfo.userId)
        fetch(url + `${userInfo.userId}`)
            .then(response => response.json())
            .then(data => {
                setSelfPosts(
                    data.posts.map(post => (
                        makeObject(data.username, data.pfp, data._id, post._id, post.image, post.comments, post.date, post.likedBy, post.description)
                    )))

                data.following.forEach(user =>
                    fetch(url + `${user}`)
                        .then(response => response.json())
                        .then(followingData => {
                            setFollowingPosts(
                                (followingData.posts.map(post => (
                                    makeObject(followingData.username, followingData.pfp, followingData._id, post._id,
                                        post.image, post.comments, post.date, post.likedBy, post.description)
                                ))
                                ))
                        })
                )
            });
    }, [show, change, userInfo])

    return (
        <div className='background-div homepage-div'>
            <ul className='posts'>
                {/* 
                {
                    followingPosts.concat(selfPosts).map(post => console.log(post))
                } */}
                {
                    (userInfo.userId) ?
                        followingPosts.concat(selfPosts).sort(function (a, b) {
                            return new Date(b.date) - new Date(a.date)
                        }).map(post => post ?
                            (<li>
                                {console.log(userInfo.userId)}
                                <Post
                                    username={post.username}
                                    userId={post.userId}
                                    postId={post.postId}
                                    image={post.image}
                                    comments={post.comments ? post.comments : null}
                                    date={post.date}
                                    likedBy={post.likedBy}
                                    description={post.description}
                                    setChange={setChange}
                                    change={change}
                                />
                            </li>) :
                            <></>
                        )
                        : "NOTHING FOUND"

                }
            </ul>
        </div>
    )
}

export default Home;