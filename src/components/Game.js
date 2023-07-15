import React, { useEffect , useState} from 'react';
import "./css/Game.css";
import jetImage from "./assets/jet.png";
import bulletAudioObj from './assets/Studio_Project_V1.mp3'
import { Link } from 'react-router-dom';

export const Game = () => {
  let bulletAudio = new Audio(bulletAudioObj);
  let bullets = [];
  let obstacles = [];
  

  const [points, setpoints] = useState(0);


  // Function to shoot bullets
  function shootBullet() {
    // create a new bullet element
    const bullet = document.createElement("div");
    bullet.className = "bullet";

    // play the audio
    bulletAudio.play();

    // Position the bullet at the same coordinates as the jet
    const jet = document.getElementById("jet");
    const jetRect = jet.getBoundingClientRect();
    bullet.style.left = jetRect.left + jetRect.width / 2 + "px";
    bullet.style.top = jetRect.top + "px";

    // Append the bullet element to the game zone
    const gameZone = document.getElementById("screenzone");
    gameZone.appendChild(bullet);

    // Start the animation for the bullet
    bullet.style.animationPlayState = "running";
    // Add the bullet element to the bullets array
    bullets.push(bullet);

  }

  // Function to create an obstacle
  function createObstacle() {
    const obstacle = document.createElement("div");
    obstacle.className = "obstacle";

    // Randomly position the obstacle horizontally within the game zone
    const gameZone = document.getElementById("screenzone");
    const gameZoneRect = gameZone.getBoundingClientRect();
    const maxPosition = gameZoneRect.width - 250; // Adjust the value based on the obstacle size
    const randomPosition = Math.floor(Math.random() * maxPosition + 150);
    obstacle.style.left = randomPosition + "px";

    obstacle.style.top = gameZoneRect.height - 50*Math.floor(5*Math.random()) - 100 + "px";

    // Append the obstacle element to the game zone
    gameZone.appendChild(obstacle);

    // Add the obstacle element to the obstacles array
    obstacles.push(obstacle);
  }

  // Function to move the bullets and check for collisions
  function moveBullets() {
    bullets.forEach((bullet, bulletIndex) => {
      const bulletRect = bullet.getBoundingClientRect();

      // Update the position of the bullet
      bullet.style.top = bulletRect.top - 10 + "px";
      

      // Check if the bullet is out of the game zone or collides with an obstacle
      if (bulletRect.top <= 0 || checkBulletCollision(bulletRect)) {
        // Remove the bullet from the DOM
        bullet.remove();

        // Remove the bullet from the bullets array
        bullets.splice(bulletIndex, 1);
      }
    });
  }

  // Function to check for collision between bullet and obstacle
  function checkBulletCollision(bulletRect) {
    for (let i = 0; i < obstacles.length; i++) {
      const obstacle = obstacles[i];
      const obstacleRect = obstacle.getBoundingClientRect();

      //Check if the bullet and obstacle collide
      if (
        bulletRect.top <= obstacleRect.bottom &&
        bulletRect.right >= obstacleRect.left &&
        bulletRect.left <= obstacleRect.right
      ) {
        
        setpoints(points => points + 1);
        // Remove the obstacle
        obstacle.remove();

        // Remove the obstacle from the obstacles array
        obstacles.splice(i, 1);

        
        return true; // Collision detected
      }
    }

    return false; // No collision detected
  }


    useEffect(() => {
      document.onkeydown = (e) => {
        if (e.code === "KeyD") {
          document.getElementById("jet").style.left = "44vw";
        }
        if (e.code === "KeyA") {
          document.getElementById("jet").style.left = "2vw";
        }
        if (e.code === "KeyJ"){
          shootBullet(); 
        }
      };

      // Game loop to continuously move the bullets
    const moveBulletsInterval = setInterval(moveBullets, 50);

    // Game loop to create obstacles
    const createObstacleInterval = setInterval(createObstacle, 500);
      return () => {
        // Clean up intervals on component unmount
        clearInterval(moveBulletsInterval);
        clearInterval(createObstacleInterval);
      };
    }, []);
    
    function timeStart(){
      document.getElementById("screenzone").style.display = "block";
      document.getElementById("start-button").style.display = "none";
      let time_count = 99;
      let t = setInterval(()=>{
        if(document.getElementById("time")!=null){
          document.getElementById("time").style.display = "block";
          document.getElementById("time").innerText = time_count+" seconds left";
          time_count--;
          
        }
        else{
          time_count = 99;
          clearInterval(t);
        }
      },1000)

      if(document.getElementById("time")===null){
        clearInterval(t);
        clearInterval(t1);
        document.getElementById("time").style.display = "none";
      }
      
      let t1 = setTimeout(()=>{
        document.getElementById("screenzone").style.display = "none";
        document.getElementById("time").style.display = "none";
        clearInterval(t); 
      },100000)
    }
 

  return (
    <div id="Game">
      <div id='gamezone'>
        <div id='screenzone'>
          <img id='jet' src={jetImage} alt="" />
        </div>
        <div id='scorezone'>
            <button onClick={timeStart} id='start-button'>start</button>
            <h2 id='time'></h2>
            <h2 id='points-display'>Score: {points}</h2>
        </div>
      </div>
    </div>
  )
}