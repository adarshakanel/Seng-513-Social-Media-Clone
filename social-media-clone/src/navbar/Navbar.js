import React from 'react'
import '../css/Navbar.css'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SearchIcon from '@material-ui/icons/Search';
import AppContext from '../context/AppContext';
import "bootstrap"
import { NavDropdown } from 'react-bootstrap'
import { MakePost } from '../general/MakePost';
export const Navbars = () => {
    const navigate = useNavigate();
    const { loggedIn, isLoggedIn, url, userInfo } = useContext(AppContext)
    const [searchVal, setSearchVal] = useState('')
    // let url = 'http://localhost:5000/user/'
    // console.log(userInfo)
    const navbarClicked = (e, path) => {
        e.preventDefault()
        navigate(`/user${path}`, { replace: true })
    }

    const NavbarSearchClicked = (e, path) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: path })
        };
        fetch(url + `findId`, requestOptions)
            .then(response =>
                response.ok ?
                    response.json() : null
            )
            .then(data => {
                navigate(`user/${data._id}`,
                    { replace: false })
            })
    }

    const logOff = (e) => {
        e.preventDefault()
        isLoggedIn(loggedIn => !loggedIn)
        navigate(`/`, { replace: true })
    }
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand navbarLogo" onClick={(e) => navbarClicked(e, "/")}>InstaChat</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                        loggedIn ?
                            <div className="navBarContainer ">
                                <div className="navbar-nav">
                                    <div className="input-group rounded">
                                        <input type="search" className="form-control rounded" value={searchVal} onChange={e => setSearchVal(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' ? NavbarSearchClicked(e, `${searchVal}`) : null}
                                            placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        <span className="input-group-text border-0" id="search-addon">
                                            <SearchIcon onClick={(e) => NavbarSearchClicked(e, `${searchVal}`)} ></SearchIcon >
                                        </span>
                                    </div>

                                    <div className='navbar-components'>
                                        <div className="nav-link active navLink" aria-current="page">
                                            <MakePost></MakePost>
                                        </div>
                                        <div className="nav-link active navLink" aria-current="page" onClick={(e) => { navbarClicked(e, "/") }}>
                                            <HomeIcon className='navLink'></HomeIcon>
                                        </div>

                                        <div className="nav-link active navLink" onClick={(e) => { navbarClicked(e, "/chat") }}>
                                            <QuestionAnswerIcon className='navLink' />
                                        </div>
                                        <NavDropdown
                                            title={
                                                <img src={require("../images/paris.jpg")} className='navBarImg' alt='profile' />
                                            }
                                            id="basic-nav-dropdown"
                                        >
                                            <NavDropdown.Item onClick={(e) => { navbarClicked(e, `/${userInfo.userId}`) }}>Profile</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={(e) => { logOff(e) }}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </div>

                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </nav>
        </>
    )
}
