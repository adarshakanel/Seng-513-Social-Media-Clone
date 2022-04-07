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
        fetch(url + `following/${userInfo.userId}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setSelfPosts({ userId: data._id, posts: [data.posts] })
                setFollowingPosts(data.following ? data.following.map(following => [...followingPosts, { userId: following._id, posts: [following.posts] }])
                    : [])

            });
    }, [])

    const posts = []
    for (let i = 0; i < 20; i++) {
        posts.push(<Posts />)
    }

    const [allPosts, setAllPosts] = useState([selfPosts, ...followingPosts]);
    // const [allPosts, setAllPosts] = useState([]);

    // useEffect(() => {
    //     setAllPosts(prev => {
    //         return prev.sort(function (post1, post2) {
    //             return new Date(post2.date) - new Date(post1.date);
    //         });
    //     })
    // }, [selfPosts, followingPosts])

    return (
        <div className='background-div homepage-div'>
            <ul className='posts'>
                {
                    console.log([selfPosts, ...followingPosts])

                }

                {
                    // allPosts.map(post => <li>{post}</li>)
                    posts.map(post => <li>{post}</li>)
                }
            </ul>
        </div>
    )
}

export default Home;