import React from 'react'
import './css/Help.css';
import DKey from './assets/icons8-d-key-48.png'
import Akey from './assets/icons8-a-key-48.png'
import Jkey from './assets/icons8-j-key-48.png'

export const Help = () => {
  return (
    <div id='Help'>
        <h2>Instructions to Play the Game</h2>
        <div className='box'>
            <div>To play the game press the start button and a timer will appear of 100 seconds.
            Destroy as many Asteroids as possible.</div>
            <div>
                To move the jet to right press <span>d</span> button.
                <br />
                <img src={DKey} alt="" />
            </div>
            <div>
                To move the jet to left press <span>a</span> button.
                <br />
                <img src={Akey} alt="" />
            </div>
            <div>
                To Shoot the Asteroids press <span>j</span> button.
                <br />
                <img src={Jkey} alt="" />
            </div>
            <div>
                
                
                
            </div>
            
            
        </div>
    </div>
  )
}
