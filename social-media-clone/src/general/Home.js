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
    useEffect(() => {
        setFollowingPosts([])
        setSelfPosts([])
        fetch(url + `/following/${userInfo.userId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const value = []
                setSelfPosts({ userId: data._id, posts: data.posts })
                data.following.map(following => setFollowingPosts([...followingPosts, { userId: following._id, posts: [following.posts] }]))
            });
    }, [])

    const posts = []
    for (let i = 0; i < 20; i++) {
        posts.push(<Posts />)
    }

    const [allPosts, setAllPosts] = useState(selfPosts.concat(followingPosts));

    useEffect(() => {
        setAllPosts(prev => {
            return prev.sort(function (post1, post2) {
                return new Date(post2.date) - new Date(post1.date);
            });
        })
    }, [selfPosts, followingPosts])

    return (
        <div className='background-div homepage-div'>
            <ul className='posts'>
                {/* {
                    console.log(followingPosts)

                }
                {
                    console.log(selfPosts)

                } */}
                {
                    allPosts.map(post => <li>{post}</li>)
                }
            </ul>
        </div>
    )
}

export default Home;