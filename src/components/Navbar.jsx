import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.svg';

function Navbar() {
    return (
        <div>
            <div className="nav">
                <ul className="nav-items">
                    {/* <li className="items"><Link to={'/'}><img src={logo} width={80} className="App-logo" alt="logo" /></Link></li> */}
                    <li className="items"><Link to={'/Home'}>Home</Link></li>
                    <li className="items"><Link to={'/Student'}>Student</Link></li>
                    <li className="items"><Link to={'/Contect'}>Contect</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar