import React from 'react'
import Posts from './Posts'
import './../css/Home.css'

export const Home = () => {
    const posts = []
    for (let i = 0; i < 20; i++) {
        posts.push(<Posts />)
    }

    return (
        <div className='background-div homepage-div'>
            <ul className='posts'>
                {
                    posts.map(arg => <li>{arg}</li>)
                }
            </ul>
        </div>
    )
}

export default Home;