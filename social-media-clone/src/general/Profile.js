import React, { useState } from 'react'
import "../css/Profile.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Profile = () => {
    const [followed, setIsFollowed] = useState('false')
    return (
        <>
            <div className="container">
                <div className="profileContainer">
                    <Card style={{ width: '18rem' }} className="cardContainer shadow-lg p-3 mb-5 bg-white rounded" >
                        <Card.Img src={require("../images/paris.jpg")} alt="" className="PostPfp" />
                        <Card.Body className='descContainer' >
                            <Card.Title>
                                <div className="ProfileTop">
                                    <div className="usernameText">
                                        John Doe
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
                                        0 posts
                                    </div>
                                    <div className="followersText">
                                        10 followers
                                    </div>
                                    <div className="followingText">
                                        12 following
                                    </div>
                                </div>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
        // <div className='bodyy'>Profile</div>
    )
}
