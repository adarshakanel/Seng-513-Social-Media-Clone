import React from 'react'
import '../css/Navbar.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import AppContext from '../context/AppContext';
import "bootstrap"
export const Navbar = () => {
    const navigate = useNavigate();
    const { loggedIn } = useContext(AppContext)

    const navbarClicked = (e, path) => {
        // navigate(path)
        e.preventDefault()
        navigate(path, { replace: true })
    }
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand navbarLogo" href="#">InstaChat</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                        loggedIn ?
                            <div className="navBarContainer">
                                <div className="navbar-nav">
                                    <div className="input-group rounded">
                                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        <span className="input-group-text border-0" id="search-addon">
                                            <SearchIcon></SearchIcon>
                                            {/* <i className="fas fa-search"></i> */}
                                        </span>
                                    </div>
                                    <div className="nav-link active navLink" aria-current="page" onClick={(e) => { navbarClicked(e, "/") }}>
                                        <AddBoxIcon className='navLink'></AddBoxIcon>
                                    </div>
                                    <div className="nav-link active navLink" aria-current="page" onClick={(e) => { navbarClicked(e, "/") }}>
                                        <HomeIcon className='navLink'></HomeIcon>
                                    </div>
                                    <div className="nav-link active navLink" href="#">
                                        <QuestionAnswerIcon className='navLink' />
                                    </div>
                                    <div className="nav-link navLink" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="navLink">PFP</div>
                                    </div>
                                    <ul className="dropdown-menu dropDown" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" onClick={(e) => { navbarClicked(e, "/login") }}>Logout</a></li>
                                    </ul>
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
