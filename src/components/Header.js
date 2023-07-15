import React from 'react';
import "./css/Header.css";
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header id="Header">
        <div id="Heading">Space Wars</div>
        <ul>
            <li><Link to="/space-wars/">Home</Link></li>
            <li><Link to="/space-wars/about">Help</Link></li>
            <li><Link to="/space-wars/game">Play</Link></li>
        </ul>
    </header>
  )
}
