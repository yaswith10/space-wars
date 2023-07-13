import React from 'react'
import "./css/Home.css"
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div id="Home">
        <div id='heading-1'>Welcome to Space Wars</div>
        <div id='sub-heading-1'>Prepare for an Epic Galactic Showdown in Space Wars and Conquer the Cosmos!</div>
        <Link to='/space-wars/about' className="button-1">Learn How to Conquer the Cosmos</Link>
        <Link to='/space-wars/game' className="button-2">Play the Thrilling Game of Space Wars!</Link>
    </div>
  )
}
