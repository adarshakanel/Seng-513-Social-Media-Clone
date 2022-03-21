import React, { useState, useEffect } from 'react'
import "../css/Profile.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom';

export const Profile = () => {
    const navigate = useNavigate();

    let url = 'http://localhost:5000/user/'
    // let us = '622fffa2d143a743cf2b6362'
    const [followed, setIsFollowed] = useState('false')
    const personMock = {
        id: 0,
        username: '',
        posts: 0,
        followers: [],
        following: []
    }
    const [person, setPerson] = useState(personMock)
    console.log(useParams().name)
    const { name } = useParams()
    useEffect(() => {
        fetch(url + name)
            .then(response =>
                response.ok ?
                    response.json()
                    :
                    navigate(`/user`, { replace: true })
            )
            .then(data => setPerson(
                {
                    ...person,
                    id: data._id,
                    username: data.username,
                    posts: data.posts.length,
                    followers: data.followers,
                    following: data.following
                }
            ));
    }, [])
    console.log(person)
    return (
        <>
            <div className="container">
                <div className="profileContainer">
                    <Card style={{ width: '18rem' }} className="cardContainer shadow-lg p-3 mb-5 bg-white rounded" >
                        <Card.Img src={require("../images/paris.jpg")} alt="profile" className="PostPfp" />
                        <Card.Body className='descContainer' >
                            <Card.Title>
                                <div className="ProfileTop">
                                    <div className="usernameText">
                                        {person.username}
                                    </div>
                                    <Button variant="outline-primary">
                                        Message
                                    </Button>
                                    {
                                        followed ?
                                            <Button>
                                                Follow
                                            </Button>
                                            :
                                            <Button variant="secondary">
                                                following
                                            </Button>
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
