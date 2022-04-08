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
    // const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        setFollowingPosts([])
        setSelfPosts({})
        console.log(userInfo.userId)
        fetch(url + `following/${userInfo.userId}`)
            .then(response => response.json())
            .then(data => {
                setSelfPosts({
                    username: data.username, pfp: data.pfp,
                    userId: data._id, posts: [data.posts]
                })
                setFollowingPosts(data.following.posts.map(following =>
                ({
                    username: following.username, pfp: following.pfp, userId: following._id, posts: [following.posts]
                })
                ))

            });
    }, [userInfo])

    const posts = []
    for (let i = 0; i < 20; i++) {
        posts.push(<Posts />)
    }

    return (
        <div className='background-div homepage-div'>
            <ul className='posts'>
                {/* {
                    console.log(followingPosts.concat(selfPosts ? selfPosts : []).map(post => post))

                } */}
                {
                    posts.map(post => <li>{post}</li>)
                    // followingPosts.concat(selfPosts ? selfPosts : []).map(post => <li>{post.pfp}</li>)
                    // followingPosts.concat(selfPosts ? selfPosts : []).map(user =>
                    //     user.posts.map(post => <li>{post._id}</li>)
                    // )
                }
            </ul>
        </div>
    )
}

export default Home;