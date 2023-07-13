import React from 'react';
import "./css/Header.css";
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header id="Header">
        <div id="Heading">Space Wars</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Help</Link></li>
            <li><Link to="/game">Play</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </header>
  )
}
