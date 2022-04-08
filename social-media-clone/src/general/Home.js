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
        console.log(userInfo.userId)
        fetch(url + `${userInfo.userId}`)
            .then(response => response.json())
            .then(data => {
                setSelfPosts(
                    data.posts.map(post => (
                        // {
                        // username: data.username, pfp: data.pfp,
                        // userId: data._id, postId: post._id
                        // }
                        makeObject(data.username, data.pfp, data._id, post._id, post.image, post.comments, post.date, post.likedBy, post.description)
                    )))

                data.following.forEach(user =>
                    fetch(url + `${user}`)
                        .then(response => response.json())
                        .then(followingData => {
                            // console.log(followingData.posts.map(post => post._id))
                            setFollowingPosts(
                                (followingData.posts.map(post => (
                                    //     {
                                    //     username: followingData.username, pfp: followingData.pfp,
                                    //     userId: followingData._id, postId: post._id
                                    // }
                                    makeObject(followingData.username, followingData.pfp, followingData._id, post._id,
                                        post.image, post.comments, post.date, post.likedBy, post.description)
                                ))
                                ))
                        })
                )
                // setFollowingPosts(data.following.map(following =>
                // ({
                //     username: following.username, pfp: following.pfp, userId: following._id, postId: [following.posts]
                // })
                // ))

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

                    posts.map(post => <li>{post}</li>)

                }
            </ul>
        </div>
    )
}

export default Home;