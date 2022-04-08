import { useState, useEffect, useContext } from 'react'
import Posts from './Posts'
import './../css/Home.css'
import AppContext from '../context/AppContext'

export const Home = () => {
    const { userInfo, url } = useContext(AppContext)
    const followingPostsExample = [{
        userId: 0,
        posts: []
    }]
    const [followingPosts, setFollowingPosts] = useState([])
    const [selfPosts, setSelfPosts] = useState(null)

    function makeObject(username, pfp, userId, postId, image, commentId, date, likedBy, description) {
        return (
            {
                username, pfp, userId, postId, image, commentId, date, likedBy, description
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
    }, [userInfo])

    const posts = []
    for (let i = 0; i < 20; i++) {
        posts.push(<Posts />)
    }

    return (
        <div className='background-div homepage-div'>
            <ul className='posts'>
                {
                    console.log(followingPosts.concat(selfPosts).sort(function (a, b) {
                        return new Date(a.date) - new Date(b.plantingDate)
                    }))
                }
                {
                    // followingPosts.concat(selfPosts).sort(function (a, b) {
                    //     return new Date(a.date) - new Date(b.plantingDate)
                    // }).map(post => <li>{post.userId}</li>)
                    // <li>{userInfo.userId}</li>
                    // posts.map(post => <li>{post}</li>)
                    (userInfo.userId) ?
                        followingPosts.concat(selfPosts).sort(function (a, b) {
                            return new Date(a.date) - new Date(b.plantingDate)
                        }).map(post => <li>postId:{post.userId}</li>)
                        : "NOTHING FOUND"

                }
            </ul>
        </div>
    )
}

export default Home;