import React, { Component } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <div className="topnav" id="header">
                <Link to={{pathname: '/'}}>
                    <div className="left">
                        <img className="logo" src="/marvel-icon.png" alt="logo"></img>
                    </div>
                </Link>
            </div>
        );

    }

}

export default Header;
