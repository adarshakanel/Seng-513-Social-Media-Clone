import React, { useState, useEffect, useContext } from 'react'
import "../css/Profile.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

export const Profile = () => {
    const navigate = useNavigate();
    const { url, userInfo } = useContext(AppContext)
    // let url = 'http://localhost:5000/user/'
    // let us = '622fffa2d143a743cf2b6362'
    // const [followed, setIsFollowed] = useState('false')
    const personMock = {
        id: 0,
        username: '',
        posts: 0,
        followers: [],
        following: [],
        pfp: 'http://res.cloudinary.com/dmieyzfqg/image/upload/v1647892980/513-social-media-clone/kfkhr70nrwensq2q1zer.webp'
    }

    const [person, setPerson] = useState(personMock)
    // console.log(useParams().name)
    const { name } = useParams()
    useEffect(() => {
        fetch(url + name)
            .then(response => response.json())
            .then(data => {
                setPerson(
                    {
                        ...person,
                        id: data._id,
                        username: data.username,
                        posts: data.posts.length,
                        followers: data.followers,
                        following: data.following
                    }
                )
            });
    }, [name])

    async function messageButtonClicked(e) {
        e.preventDefault()

        fetch(url + `message/${name}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: userInfo.userId })
            })
            .then(response => response.ok ? navigate(`/user/chat/${person.id}`, { replace: true }) : null);
    }

    function updateUser(e) {
        e.preventDefault()
        if (!person.followers.includes(userInfo.userId)) {
            fetch(url + `${name}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: userInfo.userId })
                })
                .then(response =>
                    response.ok ?
                        setPerson({ ...person, followers: person.followers.concat([userInfo.userId]) }) : null
                )
        } else {
            fetch(url + `${name}`,
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: userInfo.userId })
                })
                .then(response =>
                    response.ok ?
                        setPerson({ ...person, followers: person.followers.filter(follow => follow !== userInfo.userId) }) : null
                )
        }
    }
    // console.log(person)
    return (
        <>
            <div className="container">
                <div className="profileContainer">
                    <Card style={{ width: '18rem' }} className="cardContainer shadow-lg p-3 mb-5 bg-white rounded" >
                        {/* <Card.Img src={require("../images/paris.jpg")} alt="profile" className="PostPfp" /> */}
                        <Card.Img src={userInfo.pfp} alt="profile" className="PostPfp" />
                        <Card.Body className='descContainer' >
                            <Card.Title>
                                <div className="ProfileTop">
                                    <div className="usernameText mt-3">
                                        {person.username}
                                    </div>
                                    {
                                        name !== userInfo.userId ?
                                            !person.followers.includes(userInfo.userId) ?
                                                <>
                                                    <Button variant="outline-primary mt-3" onClick={e => messageButtonClicked(e)} >
                                                        Message
                                                    </Button>
                                                    <Button class="btn btn-primary mt-3" onClick={e => updateUser(e)} >
                                                        Follow
                                                    </Button>
                                                </>
                                                :
                                                <>
                                                    <Button variant="outline-primary mt-3" onClick={e => messageButtonClicked(e)} >
                                                        Message
                                                    </Button>
                                                    <Button variant="secondary mt-3" onClick={e => updateUser(e)} >
                                                        Following
                                                    </Button>
                                                </>
                                            :
                                            null
                                    }

                                </div>
                            </Card.Title>
                            <Card.Text>
                                <div className="ProfileBottom">
                                    <div className="postText">
                                        {person.posts} post
                                    </div>
                                    <div className="followersText">
                                        {person.followers.length} followers
                                    </div>
                                    <div className="followingText">
                                        {person.following.length} following
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
        // <div className='bodyy'>Profile</div>
    )
}
